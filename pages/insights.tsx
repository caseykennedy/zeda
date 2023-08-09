import { readToken } from 'lib/sanity.api'
import {
  getAllPostsByCategoryAndFeatured,
  getAllWhitePapers,
  getClient,
  getSettings,
} from 'lib/sanity.client'
import type { Post, Settings, WhitePaper } from 'lib/sanity.queries'
import type { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

import { InsightsPage } from 'components/InsightsPage'

export const CATEGORY_INSIGHTS = 'Insights'

interface PageProps extends SharedPageProps {
  posts: Post[]
  featuredPosts: Post[]
  settings: Settings
  whitePapers: WhitePaper[]
}

interface Query {
  [key: string]: string
}

const Page = ({ posts, featuredPosts, settings, whitePapers }: PageProps) => {
  return (
    <InsightsPage
      posts={posts}
      featuredPosts={featuredPosts}
      settings={settings}
      whitePapers={whitePapers}
    />
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [{ posts = [], featuredPosts = [] }, settings, whitePapers = []] =
    await Promise.all([
      getAllPostsByCategoryAndFeatured(client, CATEGORY_INSIGHTS),
      getSettings(client),
      getAllWhitePapers(client),
    ])

  return {
    props: {
      posts,
      featuredPosts,
      settings,
      whitePapers,
      draftMode,
      token: readToken,
    },
  }
}

export default Page
