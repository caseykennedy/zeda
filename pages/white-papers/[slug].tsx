import { readToken } from 'lib/sanity.api'
import {
  getAllWhitePapersSlugs,
  getClient,
  getSettings,
  getWhitePaperBySlug,
} from 'lib/sanity.client'
import type { Settings, WhitePaper } from 'lib/sanity.queries'
import { type GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'
import post from 'schemas/post'

import { PreviewPostPage } from 'components/post'
import { WhitePaperPage } from 'components/whitePaper'

interface PageProps extends SharedPageProps {
  post: WhitePaper
  settings?: Settings
}

interface Query {
  [key: string]: string
}

const WhitePapersSlugRoute = (props: PageProps) => {
  const { settings, post, draftMode } = props

  // if (draftMode) {
  //   return <PreviewPostPage post={post} morePosts={[]} settings={settings} />
  // }

  return <WhitePaperPage post={post} morePosts={[]} settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [post, settings] = await Promise.all([
    getWhitePaperBySlug(client, params.slug),
    getSettings(client),
  ])

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllWhitePapersSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/white-papers/${slug}`) || [],
    fallback: 'blocking',
  }
}

export default WhitePapersSlugRoute
