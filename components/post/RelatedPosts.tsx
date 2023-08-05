import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

import { PostCardFeatured } from 'components/post'
import Button from 'components/ui/Button'

const RelatedPosts = ({ posts }: { posts: Post[] }) => {
  console.log('posts:', posts)
  return (
    <section className="relative w-full bg-white">
      <div className="border-b border-silver-100">
        <div className="gutter-x mx-auto flex max-w-site items-center justify-between py-6">
          <div>
            <h2 className="font-sans text-base font-medium uppercase leading-3">
              Related
            </h2>
          </div>
          <div>
            <Button variant="primary" asChild>
              <Link href="/news">All news</Link>
            </Button>
          </div>
        </div>
      </div>
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

export default RelatedPosts
