import { readToken } from 'lib/sanity.api'
import {
  getAllJobPosts,
  getAllPosts,
  getClient,
  getSettings,
} from 'lib/sanity.client'
import type { JobPost, Post, Settings } from 'lib/sanity.queries'
import { type GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

import { IndexPage } from 'components/IndexPage'
// import PreviewIndexPage from 'components/PreviewIndexPage'

interface PageProps extends SharedPageProps {
  jobPosts: JobPost[]
  posts: Post[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

const Page = ({ jobPosts, posts, settings, draftMode }: PageProps) => {
  // if (draftMode) {
  //   return <PreviewIndexPage posts={posts} settings={settings} />
  // }
  return <IndexPage jobPosts={jobPosts} posts={posts} settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [jobPosts = [], posts = [], settings] = await Promise.all([
    getAllJobPosts(client),
    getAllPosts(client),
    getSettings(client),
  ])

  return {
    props: {
      jobPosts,
      posts,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}

export default Page
