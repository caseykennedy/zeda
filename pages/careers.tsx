import { readToken } from 'lib/sanity.api'
import { getClient, getSettings } from 'lib/sanity.client'
import { type Settings } from 'lib/sanity.queries'
import { type GetStaticProps } from 'next'
import { type SharedPageProps } from 'pages/_app'

import { CareersPage } from 'components/CareersPage'

interface PageProps extends SharedPageProps {
  settings: Settings
}

interface Query {
  [key: string]: string
}

export default function Page({ settings }: PageProps) {
  return <CareersPage settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings] = await Promise.all([getSettings(client)])

  return {
    props: {
      settings,
      draftMode,
      token: readToken,
    },
  }
}
