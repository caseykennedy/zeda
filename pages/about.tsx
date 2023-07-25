import { readToken } from 'lib/sanity.api'
import { getAllPosts, getClient, getSettings } from 'lib/sanity.client'
import { type Settings } from 'lib/sanity.queries'
import { type GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

import { AboutPage } from 'components/AboutPage'

interface PageProps extends SharedPageProps {
  settings: Settings
}

interface Query {
  [key: string]: string
}

export default function Page({ settings }: PageProps) {
  // if (draftMode) {
  //   return <PreviewIndexPage posts={posts} settings={settings} />
  // }

  return <AboutPage settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, posts = []] = await Promise.all([
    getSettings(client),
    getAllPosts(client),
  ])

  return {
    props: {
      posts,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
