import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'

import Layout from 'components/Layout'
import ScrollProgress from 'components/ScrollProgress'
import Separator from 'components/ui/Separator'

import PostBody from './PostBody'
import PostHeader from './PostHeader'
import PostMeta from './PostMeta'
import PostPageHead from './PostPageHead'
import RelatedPosts from './RelatedPosts'

export interface PostPageProps {
  preview?: boolean
  loading?: boolean
  post: Post
  morePosts: Post[]
  settings?: Settings
}

const NO_POSTS: Post[] = []

const PostPage = ({
  preview,
  loading,
  morePosts = NO_POSTS,
  post,
  settings,
}: PostPageProps) => {
  const slug = post?.slug

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
                author={post.author}
                excerpt={post.excerpt}
                estimatedReadingTime={post.estimatedReadingTime}
                tags={post.tags}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <PostMeta
                notes={post.notes || ''}
                slug={slug}
                tags={post.tags || []}
              />
            </article>
            <Separator className="bg-silver-100" />
            {morePosts?.length > 0 && <RelatedPosts posts={morePosts} />}
          </>
        )}
      </Layout>
    </>
  )
}

export default PostPage
