import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

import { PostCardFeatured } from 'components/post'
import Button from 'components/ui/Button'

const FeaturedPosts = ({ posts }: { posts: Post[] }) => {
  console.log('posts:', posts)
  return (
    <section className="relative w-full border-b border-t border-silver-100 bg-white">
      <div className="gutter-x gutter-y gap mx-auto grid w-full max-w-site grid-cols-1">
        {posts.map((post) => (
          <div
            key={post._id}
            className="gutter-t border-t border-silver-100 first:border-none first:pt-0"
          >
            <PostCardFeatured
              coverImage={post.coverImage}
              date={post.date}
              estimatedReadingTime={post.estimatedReadingTime}
              excerpt={post.excerpt}
              slug={post.slug}
              title={post.title}
              categories={post.categories}
              tags={post.tags}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedPosts
