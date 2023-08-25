import { readToken } from 'lib/sanity.api'
import {
  getAllVideoPostsAndFeatured,
  getClient,
  getSettings,
} from 'lib/sanity.client'
import type { Settings, VideoPost } from 'lib/sanity.queries'
import type { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

import { VideosPage } from 'components/videos'

interface PageProps extends SharedPageProps {
  posts: VideoPost[]
  featuredPosts: VideoPost[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

const Page = ({ posts, featuredPosts, settings }: PageProps) => {
  return (
    <VideosPage
      posts={posts}
      featuredPosts={featuredPosts}
      settings={settings}
    />
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [{ posts = [], featuredPosts = [] }, settings] = await Promise.all([
    getAllVideoPostsAndFeatured(client),
    getSettings(client),
  ])

  return {
    props: {
      posts,
      featuredPosts,
      settings,
      draftMode,
      token: readToken,
    },
  }
}

export default Page
