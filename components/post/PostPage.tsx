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
  const isPR = post.categories?.includes('Press Release')

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
              />
              <PostBody content={post.content} />

              {isPR && (
                <section className="gutter-x gutter-y w-full">
                  <div className="mx-auto max-w-2xl">
                    <h4>About Zeda, Inc.</h4>
                    <p>
                      Zeda is a leading technology solutions company. Our
                      objective is to better lives by investing in cutting-edge
                      technologies, innovative companies, and groundbreaking
                      ideas. Our foundation combines expertise from diverse
                      industries, including AM, nanotech, precision
                      manufacturing, and incubating new ideas. Servicing highly
                      regulated industries such as medical, space, defense, and
                      aerospace, Zeda&apos;s mission is to build it all better
                      together.
                    </p>
                  </div>
                </section>
              )}

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
