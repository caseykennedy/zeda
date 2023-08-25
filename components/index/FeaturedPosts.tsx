import type { Post } from 'lib/sanity.queries'

import { PostCardSplit } from 'components/post'

interface Props {
  insights: Post[]
  news: Post[]
  press: Post[]
}

const FeaturedPosts = ({ insights, news, press }: Props) => {
  return (
    <section className="relative w-full border-t border-silver-900 bg-black">
      <div className="mx-auto max-w-site">
        {insights.map((post) => (
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

export default FeaturedPosts
