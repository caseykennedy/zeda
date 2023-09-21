import { readToken } from 'lib/sanity.api'
import {
  getAllPartners,
  getClient,
  getLeadershipByDepartment,
  getSettings,
} from 'lib/sanity.client'
import type { Leadership, Partner, Settings } from 'lib/sanity.queries'
import { type GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

import { TechnologiesPage } from 'components/technologies'

interface PageProps extends SharedPageProps {
  leadership: Leadership
  partners: Partner[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

const Page = ({ leadership, partners, settings }: PageProps) => {
  return (
    <TechnologiesPage
      leadership={leadership}
      partners={partners}
      settings={settings}
    />
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient()

  const [leadership, partners = [], settings] = await Promise.all([
    getLeadershipByDepartment(client, 'Technologies'),
    getAllPartners(client),
    getSettings(client),
  ])

  return {
    props: {
      leadership,
      partners,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}

export default Page
