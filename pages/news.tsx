import { readToken } from 'lib/sanity.api'
import { getAllPosts, getClient, getSettings } from 'lib/sanity.client'
import { type Post, type Settings } from 'lib/sanity.queries'
import { type GetStaticProps } from 'next'
import { type SharedPageProps } from 'pages/_app'

import { NewsPage } from 'components/NewsPage'

interface PageProps extends SharedPageProps {
  posts: Post[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

const Careers = ({ posts, settings }: PageProps) => {
  return <NewsPage posts={posts} settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [posts, settings] = await Promise.all([
    getAllPosts(client),
    getSettings(client),
  ])

  return {
    props: {
      posts,
      settings,
      draftMode,
      token: readToken,
    },
  }
}

export default Careers
