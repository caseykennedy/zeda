import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'

import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import MoreStories from 'components/MoreStories'
import ScrollProgress from 'components/ScrollProgress'
import Separator from 'components/ui/Separator'

import Layout from './Layout'
import PostBody from './PostBody'
import PostHeader from './PostHeader'
import PostPageHead from './PostPageHead'
import PostTitle from './PostTitle'

export interface PostPageProps {
  preview?: boolean
  loading?: boolean
  post: Post
  morePosts: Post[]
  settings?: Settings
}

const NO_POSTS: Post[] = []

export default function PostPage(props: PostPageProps) {
  const { preview, loading, morePosts = NO_POSTS, post, settings } = props
  const { title = demo.title } = settings || {}

  const slug = post?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <>
      <PostPageHead settings={settings} post={post} />

      <ScrollProgress />

      <Layout preview={preview!} loading={loading}>
        {/* <BlogHeader title={title} level={2} /> */}
        {preview && !post ? (
          <PostTitle>Loading…</PostTitle>
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
              />
              <PostBody content={post.content} />
            </article>
            <Separator />
            {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Layout>
    </>
  )
}
