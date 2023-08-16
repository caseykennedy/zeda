import type { Post, Settings, WhitePaperPost } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'

import Layout from 'components/Layout'
import { PostBody, PostHeader, PostMeta, PostPageHead } from 'components/post'
import ScrollProgress from 'components/ScrollProgress'

interface Props {
  preview?: boolean
  loading?: boolean
  post: WhitePaperPost
  morePosts: Post[]
  settings?: Settings
}

const NO_POSTS: Post[] = []

const WhitePaperPostPage = ({
  preview,
  loading,
  morePosts = NO_POSTS,
  post,
  settings,
}: Props) => {
  const slug = post?.slug

  console.log('post.content', post.content)

  if (!slug && !preview) {
    notFound()
  }

  return (
    <>
      <PostPageHead settings={settings} post={post} />

      <ScrollProgress />

      <Layout preview={preview!} loading={loading} theme="light">
        {preview && !post ? (
          <div>Loading…</div>
        ) : (
          <>
            <article>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                excerpt={post.excerpt}
                estimatedReadingTime={post.estimatedReadingTime}
                tags={post.tags}
                categories={['White paper']}
              />
              <PostBody content={post.content} />
              <PostMeta notes={post.notes} slug={slug} tags={post.tags} />
            </article>
            {/* <Separator className="bg-silver-100" /> */}
            {/* {morePosts?.length > 0 && <RelatedPosts posts={morePosts} />} */}
          </>
        )}
      </Layout>
    </>
  )
}

export default WhitePaperPostPage
