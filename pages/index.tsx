import { readToken } from 'lib/sanity.api'
import { getAllPosts, getClient, getSettings } from 'lib/sanity.client'
import { type Post, type Settings } from 'lib/sanity.queries'
import { type GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

import { IndexPage } from 'components/IndexPage'
import PreviewIndexPage from 'components/PreviewIndexPage'

interface PageProps extends SharedPageProps {
  posts: Post[]
  settings: Settings
}

interface Query {
  [key: string]: string
}

export default function Page({ posts, settings, draftMode }: PageProps) {
  // if (draftMode) {
  //   return <PreviewIndexPage posts={posts} settings={settings} />
  // }

  return draftMode ? (
    <PreviewIndexPage posts={posts} settings={settings} />
  ) : (
    <IndexPage posts={posts} settings={settings} />
  )
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
