import { ArrowRightIcon } from '@radix-ui/react-icons'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'
import { cn } from 'utils'

import { CategoryTag, PostDateReadingTime } from 'components/post'

interface PostTileProps extends Partial<Post> {
  className?: string
}

const PostTile = ({
  title,
  date,
  estimatedReadingTime,
  categories = [],
  slug,
  className,
}: PostTileProps) => {
  return (
    <Link
      href={`/posts/${slug}`}
      aria-label={`Read "${title}"`}
      className={cn(
        'group flex flex-1 flex-col justify-between p-4 md:p-6 lg:h-full lg:p-8',
        !className ? 'bg-white text-black' : className
      )}
    >
      <div>
        <h2 className="-mt-1.5 mb-4 line-clamp-4 text-2xl decoration-2 group-hover:underline">
          {title}
        </h2>
        <div>
          <CategoryTag categories={categories} variant="outline" />
        </div>
      </div>
      <div className="mt-16 flex flex-row items-center justify-between md:mt-24">
        <PostDateReadingTime
          dateString={date}
          estimatedReadingTime={estimatedReadingTime}
          className={cn(!className ? '' : 'text-white')}
        />
        <ArrowRightIcon
          className={cn(
            `h-6 w-6 -translate-x-6 opacity-0 transition-all group-hover:translate-x-0 group-hover:text-white group-hover:opacity-100`,
            !className ? 'group-hover:text-black' : 'group-hover:text-white'
          )}
        />
      </div>
    </Link>
  )
}

export default PostTile
