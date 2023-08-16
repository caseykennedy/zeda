import type { Post } from 'lib/sanity.queries'

import { PostCardSplit } from 'components/post'

const FeaturedPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <section className="relative w-full border-t border-silver-900 bg-white">
      {posts.map((post) => (
        <PostCardSplit
          key={post._id}
          coverImage={post.coverImage}
          date={post.date}
          estimatedReadingTime={post.estimatedReadingTime}
          excerpt={post.excerpt}
          slug={post.slug}
          title={post.title}
          categories={post.categories}
          tags={post.tags}
        />
      ))}
    </section>
  )
}

export default FeaturedPosts
