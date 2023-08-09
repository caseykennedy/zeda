import { readToken } from 'lib/sanity.api'
import {
  getAllWhitePapersSlugs,
  getClient,
  getSettings,
  getWhitePaperBySlug,
} from 'lib/sanity.client'
import type { Post, Settings, WhitePaper } from 'lib/sanity.queries'
import { type GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'
import post from 'schemas/post'

import { WhitePaperPage } from 'components/whitePaper'
// import { PreviewPostPage } from 'components/post'

interface PageProps extends SharedPageProps {
  whitePaper: WhitePaper
  settings?: Settings
}

interface Query {
  [key: string]: string
}

const WhitePapersSlugRoute = (props: PageProps) => {
  const { settings, whitePaper, draftMode } = props

  // if (draftMode) {
  //   return (
  //     <PreviewPostPage post={post} morePosts={morePosts} settings={settings} />
  //   )
  // }

  return <WhitePaperPage post={whitePaper} morePosts={[]} settings={settings} />

  console.log('whitePaper', whitePaper)
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [whitePaper, settings] = await Promise.all([
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
      whitePaper,
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
