import { readToken } from 'lib/sanity.api'
import {
  getAllPartners,
  getAllPeople,
  getClient,
  getSettings,
} from 'lib/sanity.client'
import { type Partner, type Person, type Settings } from 'lib/sanity.queries'
import { type GetStaticProps } from 'next'
import { type SharedPageProps } from 'pages/_app'

import { AboutPage } from 'components/about-page'

interface PageProps extends SharedPageProps {
  partners: Partner[]
  people: Person[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

const Page = ({ partners, people, settings }: PageProps) => {
  // if (draftMode) {
  //   return <PreviewIndexPage posts={posts} settings={settings} />
  // }

  return <AboutPage partners={partners} people={people} settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [partners = [], people = [], settings] = await Promise.all([
    getAllPartners(client),
    getAllPeople(client),
    getSettings(client),
  ])

  return {
    props: {
      partners,
      people,
      settings,
      draftMode,
      token: readToken,
    },
  }
}

export default Page
