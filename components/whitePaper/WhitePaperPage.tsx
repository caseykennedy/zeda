import type { Post, Settings, WhitePaper } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'

import Layout from 'components/Layout'
import { PostBody } from 'components/post'
import ScrollProgress from 'components/ScrollProgress'
import Separator from 'components/ui/Separator'

import PostHeader from './PostHeader'
import PostMeta from './PostMeta'
import PostPageHead from './PostPageHead'

interface Props {
  preview?: boolean
  loading?: boolean
  post: WhitePaper
  morePosts: Post[]
  settings?: Settings
}

const NO_POSTS: Post[] = []

const WhitePaperPage = ({
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
                date={post.date}
                estimatedReadingTime={post.estimatedReadingTime}
                tags={post.tags}
                categories={['White Paper']}
              />
              <PostBody content={post.content} />
              {/* <PostMeta
                notes={post.notes || ''}
                slug={slug}
                tags={post.tags || []}
              /> */}
            </article>
            {/* <Separator className="bg-silver-100" /> */}
            {/* {morePosts?.length > 0 && <RelatedPosts posts={morePosts} />} */}
          </>
        )}
      </Layout>
    </>
  )
}

export default WhitePaperPage
