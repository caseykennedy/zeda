import { readToken } from 'lib/sanity.api'
import {
  getAllJobPosts,
  getAllPartners,
  getClient,
  getFeaturedPostsByCategoryQuery,
  getSettings,
} from 'lib/sanity.client'
import type { JobPost, Partner, Post, Settings } from 'lib/sanity.queries'
import { type GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'
import {
  CATEGORY_INSIGHTS,
  CATEGORY_NEWS,
  CATEGORY_PRESS,
} from 'utils/constants'

import { IndexPage } from 'components/home'

interface PageProps extends SharedPageProps {
  jobPosts: JobPost[]
  insights: Post[]
  news: Post[]
  press: Post[]
  partners: Partner[]
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
  partners,
  settings,
}: PageProps) => {
  return (
    <IndexPage
      jobPosts={jobPosts}
      insights={insights}
      news={news}
      press={press}
      partners={partners}
      settings={settings}
    />
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [
    jobPosts = [],
    insights = [],
    news = [],
    press = [],
    partners = [],
    settings,
  ] = await Promise.all([
    getAllJobPosts(client),
    getFeaturedPostsByCategoryQuery(client, CATEGORY_INSIGHTS),
    getFeaturedPostsByCategoryQuery(client, CATEGORY_NEWS),
    getFeaturedPostsByCategoryQuery(client, CATEGORY_PRESS),
    getAllPartners(client),
    getSettings(client),
  ])

  return {
    props: {
      jobPosts,
      insights,
      news,
      press,
      partners,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}

export default Page
