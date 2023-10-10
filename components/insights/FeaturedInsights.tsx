import type { Post } from 'lib/sanity.queries'

import { PostCardSplit } from 'components/post'

const FeaturedInsights = ({ posts }: { posts: Post[] }) => {
  return (
    <section className="relative w-full border-b border-t border-silver-900 bg-black">
      <div className="mx-auto max-w-site">
        {posts.map((post) => (
          <PostCardSplit
            key={post._id}
            coverImage={post.coverImage}
            date={post.date}
            estimatedReadingTime={post.estimatedReadingTime}
            slug={post.slug}
            title={post.title}
            categories={post.categories}
            tags={post.tags}
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturedInsights
