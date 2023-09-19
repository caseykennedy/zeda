import { readToken } from 'lib/sanity.api'
import {
  getAllLeadership,
  getAllPartners,
  getAllPeople,
  getClient,
  getSettings,
} from 'lib/sanity.client'
import type { Leadership, Partner, Person, Settings } from 'lib/sanity.queries'
import { type GetStaticProps } from 'next'
import { type SharedPageProps } from 'pages/_app'

import { AboutPage } from 'components/about'

interface PageProps extends SharedPageProps {
  leadership: Leadership
  partners: Partner[]
  people: Person[]
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

  const [leadership, partners = [], people = [], settings] = await Promise.all([
    getAllLeadership(client),
    getAllPartners(client),
    getAllPeople(client),
    getSettings(client),
  ])

  return {
    props: {
      leadership,
      partners,
      people,
      settings,
      draftMode,
      token: readToken,
    },
  }
}

export default Page
