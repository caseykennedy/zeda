import { readToken } from 'lib/sanity.api'
import {
  getAllWhitePapersSlugs,
  getClient,
  getSettings,
  getWhitePaperAndMorePosts,
} from 'lib/sanity.client'
import type { Settings, WhitePaperPost } from 'lib/sanity.queries'
import { type GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

import { WhitePaperPostPage } from 'components/white-paper'

interface PageProps extends SharedPageProps {
  post: WhitePaperPost
  morePosts: WhitePaperPost[]
  settings?: Settings
}

interface Query {
  [key: string]: string
}

const WhitePapersSlugRoute = ({
  post,
  morePosts,
  settings,
  draftMode,
}: PageProps) => {
  return (
    <WhitePaperPostPage post={post} morePosts={morePosts} settings={settings} />
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [{ post, morePosts }, settings] = await Promise.all([
    getWhitePaperAndMorePosts(client, params.slug),
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
      morePosts,
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
