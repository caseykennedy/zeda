import { readToken } from 'lib/sanity.api'
import {
  getClient,
  getLeadershipByDepartment,
  getSettings,
} from 'lib/sanity.client'
import type { Leadership, Settings } from 'lib/sanity.queries'
import type { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

import { RSVPPage } from 'components/rsvp'

interface PageProps extends SharedPageProps {
  leadership: Leadership
  settings: Settings
}

interface Query {
  [key: string]: string
}

const Page = ({ leadership, settings }: PageProps) => {
  return <RSVPPage leadership={leadership} settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [leadership, settings] = await Promise.all([
    getLeadershipByDepartment(client, 'Open House'),
    getSettings(client),
  ])

  return {
    props: {
      leadership,
      settings,
      draftMode,
      token: readToken,
    },
  }
}

export default Page
