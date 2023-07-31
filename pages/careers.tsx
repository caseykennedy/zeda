import { readToken } from 'lib/sanity.api'
import { getAllJobPosts, getClient, getSettings } from 'lib/sanity.client'
import { type JobPost, type Settings } from 'lib/sanity.queries'
import { type GetStaticProps } from 'next'
import { type SharedPageProps } from 'pages/_app'

import { CareersPage } from 'components/CareersPage'

interface PageProps extends SharedPageProps {
  jobPosts: JobPost[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

export default function Page({ jobPosts, settings }: PageProps) {
  return <CareersPage jobPosts={jobPosts} settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [jobPosts, settings] = await Promise.all([
    getAllJobPosts(client),
    getSettings(client),
  ])

  return {
    props: {
      jobPosts,
      settings,
      draftMode,
      token: readToken,
    },
  }
}
