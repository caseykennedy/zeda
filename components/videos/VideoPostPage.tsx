import type { Settings, VideoPost } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'

import Layout from 'components/Layout'
import { PostBody, PostPageHead } from 'components/post'

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

      <Layout preview={preview!} loading={loading}>
        {preview && !post ? (
          <div>Loading…</div>
        ) : (
          <>
            <article>
              <VideoPlayer videoURL={post.videoURL} />
              <PostBody content={post.content} />
              {/* <PostMeta notes={post.notes} slug={slug} tags={post.tags} /> */}
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
