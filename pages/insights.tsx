import { readToken } from 'lib/sanity.api'
import {
  getAllPostCategories,
  getAllPosts,
  getAllPostsAndFeatured,
  getClient,
  getSettings,
} from 'lib/sanity.client'
import type { Post, PostCategory, Settings } from 'lib/sanity.queries'
import type { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

import { InsightsPage } from 'components/InsightsPage'

export const CATEGORY_INSIGHTS = 'Insights'

interface PageProps extends SharedPageProps {
  posts: Post[]
  featuredPosts: Post[]
  postCategories: PostCategory[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

const Page = ({
  posts,
  featuredPosts,
  postCategories,
  settings,
}: PageProps) => {
  const filteredPosts = posts.filter((post) =>
    post.categories.includes(CATEGORY_INSIGHTS)
  )
  const filteredPostCategories = postCategories.filter((category) =>
    category.name.includes(CATEGORY_INSIGHTS)
  )
  return (
    <InsightsPage
      posts={filteredPosts}
      featuredPosts={featuredPosts}
      postCategories={filteredPostCategories}
      settings={settings}
    />
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [{ posts, featuredPosts }, postCategories, settings] =
    await Promise.all([
      getAllPostsAndFeatured(client, 'Insights'),
      getAllPostCategories(client),
      getSettings(client),
    ])

  return {
    props: {
      posts,
      featuredPosts,
      postCategories,
      settings,
      draftMode,
      token: readToken,
    },
  }
}

export default Page
