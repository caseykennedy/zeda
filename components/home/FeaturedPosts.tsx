import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'
import careersBgImg from 'public/images/irridescence.jpg'
import { cn } from 'utils'

import Img from 'components/Img'
import {
  CategoryTag,
  PostCardSplit,
  PostDateReadingTime,
} from 'components/post'
import { Button } from 'components/ui'

interface PostTileProps extends Partial<Post> {
  theme?: 'light' | 'dark'
}

const PostTile = ({
  title,
  coverImage,
  date,
  estimatedReadingTime,
  tags,
  categories = [],
  slug,
  theme = 'light',
}: PostTileProps) => {
  return (
    <Link
      href={`/posts/${slug}`}
      aria-label={`Read "${title}"`}
      className={cn(
        'flex flex-col justify-between p-4 md:p-6 lg:h-full lg:p-8',
        theme === 'light' ? 'bg-white text-black' : 'bg-violet-500 text-white'
      )}
    >
      <div>
        <h2 className="mb-4 line-clamp-4 text-2xl decoration-2 hover:underline">
          {title}
        </h2>
        <div>
          <CategoryTag categories={categories} variant="outline" />
        </div>
      </div>
      <div className="mt-16 md:mt-24">
        <PostDateReadingTime
          dateString={date}
          estimatedReadingTime={estimatedReadingTime}
          className={cn(theme === 'light' ? '' : 'text-white')}
        />
      </div>
    </Link>
  )
}

interface Props {
  insights: Post[]
  news: Post[]
  press: Post[]
}

const FeaturedPosts = ({ insights, news, press }: Props) => {
  return (
    <section className="relative w-full border-b border-t border-b-black border-t-silver-900 bg-black">
      {/* <div className="border-b border-silver-900">
        <div className="gutter-x mx-auto flex max-w-site items-center justify-between py-6">
          <div>
            <h2 className="font-sans text-base font-medium uppercase tracking-wide text-silver-500">
              Articles
            </h2>
          </div>
          <div>
            <Button variant="primary" asChild>
              <Link href="/insights">All articles</Link>
            </Button>
          </div>
        </div>
      </div> */}

      <div className="mx-auto max-w-site">
        <div>
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
        <div className="flex flex-col border-t border-black md:flex-row">
          <div className="relative min-h-[250px] flex-1 bg-moss-500">
            <Img
              src={careersBgImg}
              alt="Abstract wallpaper art"
              fill={true}
              style={{
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />
          </div>
          <div className="flex flex-1 flex-col lg:flex-col xl:flex-row">
            {news.slice(0, 1).map((post) => (
              <PostTile
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
            {press.slice(0, 1).map((post) => (
              <PostTile
                key={post._id}
                coverImage={post.coverImage}
                date={post.date}
                estimatedReadingTime={post.estimatedReadingTime}
                slug={post.slug}
                title={post.title}
                categories={post.categories}
                tags={post.tags}
                theme="dark"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPosts
