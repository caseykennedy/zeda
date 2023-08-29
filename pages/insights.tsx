import { PostCategories } from 'lib/constants'
import { readToken } from 'lib/sanity.api'
import {
  getAllPostsByCategoryAndFeatured,
  getAllVideoPosts,
  getAllWhitePapers,
  getClient,
  getSettings,
} from 'lib/sanity.client'
import type {
  Post,
  Settings,
  VideoPost,
  WhitePaperPost,
} from 'lib/sanity.queries'
import type { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

import { InsightsPage } from 'components/insights'

interface PageProps extends SharedPageProps {
  posts: Post[]
  featuredPosts: Post[]
  videoPosts: VideoPost[]
  whitePapers: WhitePaperPost[]
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
  console.log('posts', featuredPosts)
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
    getAllPostsByCategoryAndFeatured(client, PostCategories.CATEGORY_INSIGHTS),
    getAllVideoPosts(client),
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
