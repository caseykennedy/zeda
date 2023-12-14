import { readToken } from 'lib/sanity.api'
import {
  getAllWhitePapersSlugs,
  getClient,
  getSettings,
  getVideoPostAndMoreVideos,
} from 'lib/sanity.client'
import type { Settings, VideoPost } from 'lib/sanity.queries'
import { type GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

// import { PreviewPostPage } from 'components/post'
import { VideoPostPage } from 'components/videos'

interface PageProps extends SharedPageProps {
  post: VideoPost
  morePosts: VideoPost[]
  settings?: Settings
}

interface Query {
  [key: string]: string
}

const VideosSlugRoute = (props: PageProps) => {
  const { post, morePosts, settings } = props

  return <VideoPostPage post={post} morePosts={morePosts} settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [{ post, morePosts = [] }, settings] = await Promise.all([
    getVideoPostAndMoreVideos(client, params.slug),
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
    paths: slugs?.map(({ slug }) => `/videos/${slug}`) || [],
    fallback: 'blocking',
  }
}

export default VideosSlugRoute
