import { readToken } from 'lib/sanity.api'
import {
  getClient,
  getLeadershipByDepartment,
  getSettings,
} from 'lib/sanity.client'
import type { Leadership, Settings } from 'lib/sanity.queries'
import { type GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

import { HealthPage } from 'components/health'

interface Props extends SharedPageProps {
  leadership: Leadership
  settings: Settings
}

interface Query {
  [key: string]: string
}

const Page = ({ leadership, settings }: Props) => {
  return <HealthPage leadership={leadership} settings={settings} />
}

export const getStaticProps: GetStaticProps<Props, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient()

  const [leadership, settings] = await Promise.all([
    getLeadershipByDepartment(client, 'Technologies'),
    getSettings(client),
  ])

  return {
    props: {
      leadership,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}

export default Page
