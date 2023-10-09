import type { Post } from 'lib/sanity.queries'

import { PostCardFeatured } from 'components/post'

const FeaturedPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <section className="relative w-full border-t border-silver-100 bg-white">
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
              slug={`posts/${post.slug}`}
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
