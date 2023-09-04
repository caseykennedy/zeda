import { PostCategories } from 'lib/constants'
import type { Post, Settings } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'

import Layout from 'components/Layout'
import ScrollProgress from 'components/ScrollProgress'
import Separator from 'components/ui/Separator'

import MorePosts from './MorePosts'
import PostBody from './PostBody'
import PostHeader from './PostHeader'
import PostMeta from './PostMeta'
import PostPageHead from './PostPageHead'

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
  const isInsight = post?.categories?.includes(PostCategories.CATEGORY_INSIGHTS)

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
                categories={post.categories}
                slug={post.slug}
              />
              <section className="gutter-x gutter-y w-full">
                <div className="mx-auto max-w-2xl">
                  <PostBody content={post.content} />
                </div>
              </section>
              <PostMeta notes={post.notes} slug={slug} tags={post.tags} />
            </article>

            <Separator className="bg-silver-100" />

            {morePosts?.length > 0 && (
              <MorePosts
                posts={morePosts}
                btnText={isInsight ? 'All insights' : 'All news'}
                btnHref={isInsight ? '/insights' : '/news'}
              />
            )}
          </>
        )}
      </Layout>
    </>
  )
}

export default PostPage
