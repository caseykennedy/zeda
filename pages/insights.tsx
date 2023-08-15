import { readToken } from 'lib/sanity.api'
import {
  getAllPostsByCategoryAndFeatured,
  getAllWhitePapers,
  getClient,
  getFeaturedVideoPosts,
  getSettings,
} from 'lib/sanity.client'
import type { Post, Settings, VideoPost, WhitePaper } from 'lib/sanity.queries'
import type { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

import { InsightsPage } from 'components/InsightsPage'

export const CATEGORY_INSIGHTS = 'Insights'

interface PageProps extends SharedPageProps {
  posts: Post[]
  featuredPosts: Post[]
  videoPosts: VideoPost[]
  whitePapers: WhitePaper[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

const Page = ({
  posts,
  featuredPosts,
  videoPosts,
  whitePapers,
  settings,
}: PageProps) => {
  return (
    <InsightsPage
      posts={posts}
      featuredPosts={featuredPosts}
      videoPosts={videoPosts}
      whitePapers={whitePapers}
      settings={settings}
    />
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [
    { posts = [], featuredPosts = [] },
    videoPosts = [],
    whitePapers = [],
    settings,
  ] = await Promise.all([
    getAllPostsByCategoryAndFeatured(client, CATEGORY_INSIGHTS),
    getFeaturedVideoPosts(client),
    getAllWhitePapers(client),
    getSettings(client),
  ])

  return {
    props: {
      posts,
      featuredPosts,
      videoPosts,
      whitePapers,
      settings,
      draftMode,
      token: readToken,
    },
  }
}

export default Page
