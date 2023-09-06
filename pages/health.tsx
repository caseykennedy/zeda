import { readToken } from 'lib/sanity.api'
import { getAllPartners, getClient, getSettings } from 'lib/sanity.client'
import type { Partner, Settings } from 'lib/sanity.queries'
import { type GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

import { HealthPage } from 'components/health'

interface Props extends SharedPageProps {
  partners: Partner[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

const Page = ({ partners, settings }: Props) => {
  return <HealthPage partners={partners} settings={settings} />
}

export const getStaticProps: GetStaticProps<Props, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient()

  const [partners = [], settings] = await Promise.all([
    getAllPartners(client),
    getSettings(client),
  ])

  return {
    props: {
      partners,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}

export default Page
