/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { dashboardTool } from '@sanity/dashboard'
import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, previewSecretId, projectId } from 'lib/sanity.api'
import { previewDocumentNode } from 'plugins/previewPane'
import { productionUrl } from 'plugins/productionUrl'
import { settingsPlugin, settingsStructure } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { vercelWidget } from 'sanity-plugin-dashboard-widget-vercel'
import jobPostType from 'schemas/job-post'
import leadershipType from 'schemas/leadership'
import partnerType from 'schemas/partner'
import personType from 'schemas/person'
import postType from 'schemas/post'
import postCategoryType from 'schemas/post-category'
import settingsType from 'schemas/settings'
import videoType from 'schemas/video'
import whitePaperType from 'schemas/white-paper'

const title = 'Zeda, Inc.'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      settingsType,
      personType,
      leadershipType,
      jobPostType,
      partnerType,
      postCategoryType,
      postType,
      whitePaperType,
      videoType,
    ],
  },
  plugins: [
    dashboardTool({
      widgets: [vercelWidget()],
    }),
    deskTool({
      structure: settingsStructure(settingsType),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    settingsPlugin({ type: settingsType.name }),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: [postType.name, settingsType.name],
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
