import { readToken } from 'lib/sanity.api'
import {
  getAllPostCategories,
  getAllPosts,
  getClient,
  getSettings,
} from 'lib/sanity.client'
import type { Post, PostCategory, Settings } from 'lib/sanity.queries'
import type { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

import { NewsPage } from 'components/news'

export const CATEGORY_NEWS = 'News'
export const CATEGORY_PRESS = 'Press Release'

interface PageProps extends SharedPageProps {
  posts: Post[]
  postCategories: PostCategory[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

const Page = ({ posts, postCategories, settings }: PageProps) => {
  const filteredPosts = posts.filter(
    (post) =>
      post.categories?.includes(CATEGORY_NEWS) ||
      post.categories?.includes(CATEGORY_PRESS)
  )
  const filteredPostCategories = postCategories.filter(
    (category) =>
      category.name.includes(CATEGORY_NEWS) ||
      category.name.includes(CATEGORY_PRESS)
  )
  return (
    <NewsPage
      posts={filteredPosts}
      postCategories={filteredPostCategories}
      settings={settings}
    />
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [posts, postCategories, settings] = await Promise.all([
    getAllPosts(client),
    getAllPostCategories(client),
    getSettings(client),
  ])

  return {
    props: {
      posts,
      postCategories,
      settings,
      draftMode,
      token: readToken,
    },
  }
}

export default Page
