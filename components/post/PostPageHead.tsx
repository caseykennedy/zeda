import * as demo from 'lib/demo.data'
import { urlForImage } from 'lib/sanity.image'
import { type Post, type Settings, WhitePaperPost } from 'lib/sanity.queries'
import Head from 'next/head'

import PageMeta from 'components/PageMeta'

export interface PostPageHeadProps {
  settings?: Settings
  post: Post | WhitePaperPost
}

export default function PostPageHead({ settings, post }: PostPageHeadProps) {
  const title = settings?.title ?? demo.title
  return (
    <Head>
      <title>{post.title ? `${post.title} | ${title}` : title}</title>
      <PageMeta />
      {post.coverImage?.asset?._ref && (
        <meta
          property="og:image"
          content={urlForImage(post.coverImage)
            .width(1200)
            .height(627)
            .fit('crop')
            .url()}
        />
      )}
    </Head>
  )
}
