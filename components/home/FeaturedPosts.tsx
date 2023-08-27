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
import { Pill } from 'components/ui'
import ArrowLink from 'components/ui/LinkArrow'

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
    <div
      className={cn(
        'flex flex-col justify-between p-4 md:p-6 lg:h-full lg:p-8',
        theme === 'light' ? 'bg-white text-black' : 'bg-violet-500 text-white'
      )}
    >
      <div>
        <Link href={`/posts/${slug}`} aria-label={`Read "${title}"`}>
          <h2 className="mb-4 line-clamp-3 text-2xl decoration-2 hover:underline">
            {title}
          </h2>
        </Link>
        <div className="mb-4 flex flex-wrap gap-1.5 md:mb-0">
          <CategoryTag categories={categories} />
          {tags &&
            tags.slice(0, 1).map((tag, idx) => (
              <Pill variant="outline" key={idx}>
                {tag}
              </Pill>
            ))}
        </div>
      </div>
      <div className="mt-16 md:mt-24">
        <PostDateReadingTime
          dateString={date}
          estimatedReadingTime={estimatedReadingTime}
        />
      </div>
    </div>
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
        <div className="grid h-auto grid-flow-row auto-rows-fr md:max-h-fit lg:auto-cols-fr lg:grid-flow-col">
          <div className="relative bg-moss-500">
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
          <div className="grid grid-flow-row auto-rows-fr md:auto-cols-fr md:grid-flow-col xl:auto-cols-fr xl:grid-flow-col">
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
                theme="dark"
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
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPosts
