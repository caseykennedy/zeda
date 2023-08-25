import { readToken } from 'lib/sanity.api'
import {
  getAllJobPosts,
  getClient,
  getFeaturedPostsByCategoryQuery,
  getSettings,
} from 'lib/sanity.client'
import type { JobPost, Post, Settings } from 'lib/sanity.queries'
import { type GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'
import {
  CATEGORY_INSIGHTS,
  CATEGORY_NEWS,
  CATEGORY_PRESS,
} from 'utils/constants'

import { IndexPage } from 'components/index'

interface PageProps extends SharedPageProps {
  jobPosts: JobPost[]
  insights: Post[]
  news: Post[]
  press: Post[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

const Page = ({
  jobPosts,
  insights,
  news,
  press,
  settings,
  draftMode,
}: PageProps) => {
  return (
    <IndexPage
      jobPosts={jobPosts}
      insights={insights}
      news={news}
      press={press}
      settings={settings}
    />
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [jobPosts = [], insights = [], news = [], press = [], settings] =
    await Promise.all([
      getAllJobPosts(client),
      getFeaturedPostsByCategoryQuery(client, CATEGORY_INSIGHTS),
      getFeaturedPostsByCategoryQuery(client, CATEGORY_NEWS),
      getFeaturedPostsByCategoryQuery(client, CATEGORY_PRESS),
      getSettings(client),
    ])

  return {
    props: {
      jobPosts,
      insights,
      news,
      press,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}

export default Page
