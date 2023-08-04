import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

import { PostCard } from 'components/post'
import Button from 'components/ui/Button'
import Section from 'components/ui/Section'

const PostGrid = ({ posts }: { posts: Post[] }) => {
  console.log('posts:', posts)
  return (
    <Section>
      <div className="gutter-b flex gap-1.5">
        <Button variant="primary">All</Button>
        <Button variant="accent">News</Button>
        <Button variant="accent">Press release</Button>
      </div>
      <div className="gap grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <PostCard
            key={post._id}
            author={post.author}
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
      </div>
    </Section>
  )
}

export default PostGrid
