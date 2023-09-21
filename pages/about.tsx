import { readToken } from 'lib/sanity.api'
import {
  getAllPartners,
  getClient,
  getLeadershipByDepartment,
  getSettings,
} from 'lib/sanity.client'
import type { Leadership, Partner, Settings } from 'lib/sanity.queries'
import { type GetStaticProps } from 'next'
import { type SharedPageProps } from 'pages/_app'

import { AboutPage } from 'components/about'

interface PageProps extends SharedPageProps {
  leadership: Leadership
  partners: Partner[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

const Page = ({ leadership, partners, settings }: PageProps) => (
  <AboutPage
    partners={partners}
    people={leadership.people}
    settings={settings}
  />
)

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [leadership, partners = [], settings] = await Promise.all([
    getLeadershipByDepartment(client, 'All'),
    getAllPartners(client),
    getSettings(client),
  ])

  return {
    props: {
      leadership,
      partners,
      settings,
      draftMode,
      token: readToken,
    },
  }
}

export default Page
