import type { Post, WhitePaperPost } from 'lib/sanity.queries'
import Link from 'next/link'

import { PostCardFeatured } from 'components/post'
import Button from 'components/ui/Button'

const MorePosts = ({
  posts,
  btnHref = '/news',
  btnText = 'All news',
  isWhitePaper = false,
}: {
  posts: Post[] | WhitePaperPost[]
  btnHref?: string
  btnText?: string
  isWhitePaper?: boolean
}) => {
  const slugPath = isWhitePaper ? 'white-papers' : 'posts'
  return (
    <section className="relative w-full bg-white">
      <div className="border-b border-silver-100">
        <div className="gutter-x mx-auto flex max-w-site items-center justify-between py-6">
          <div>
            <h2 className="font-sans text-base font-medium uppercase tracking-wide">
              Latest
            </h2>
          </div>
          <div>
            <Button variant="outline" asChild>
              <Link href={btnHref}>{btnText}</Link>
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
              slug={`${slugPath}/${post.slug}`}
              title={post.title}
              categories={post.categories || ['White paper']}
              tags={post.tags}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default MorePosts
