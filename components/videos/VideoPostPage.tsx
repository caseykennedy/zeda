import type { Settings, VideoPost } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'
import { LayoutThemes } from 'utils/constants'

import Layout from 'components/Layout'
import { PostBody, PostHeader, PostPageHead } from 'components/post'

import VideoPlayer from './VideoPlayer'

interface Props {
  preview?: boolean
  loading?: boolean
  post: VideoPost
  morePosts: VideoPost[]
  settings?: Settings
}

const VideoPostPage = ({ preview, loading, post, settings }: Props) => {
  const slug = post?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <>
      <PostPageHead settings={settings} post={post} />

      <Layout preview={preview!} loading={loading} theme={LayoutThemes.DARK}>
        {preview && !post ? (
          <div>Loading…</div>
        ) : (
          <>
            <article className="bg-black pt-header">
              <section>
                <section className="gutter-x gutter-y w-full">
                  <div className="container mx-auto max-w-2xl">
                    <div className="aspect-video">
                      <VideoPlayer videoURL={post.videoURL} />
                    </div>
                    <PostBody content={post.content} />
                    {/* <PostMeta notes={post.notes} slug={slug} tags={post.tags} /> */}
                  </div>
                </section>
              </section>
            </article>
            {/* <Separator className="bg-silver-100" /> */}
            {/* {morePosts?.length > 0 && <RelatedPosts posts={morePosts} />} */}
          </>
        )}
      </Layout>
    </>
  )
}

export default VideoPostPage
