import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'
import { cn } from 'utils'

import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Icon from 'components/ui/Icon'
import LinkArrow from 'components/ui/LinkArrow'
import Pill from 'components/ui/Pill'

import PostDate from './PostDate'

const PostCard = ({
  author,
  coverImage,
  date,
  estimatedReadingTime,
  excerpt,
  categories,
  slug,
  tags,
  title,
}: Omit<Post, '_id'>) => {
  return (
    <Link
      href={`/posts/${slug}`}
      className="gap group grid w-full sm:grid-cols-2 lg:grid-cols-3"
      aria-label={`Read "${title}"`}
      title={title}
    >
      <div className="w-full">
        {coverImage ? (
          <CoverImage
            // slug={slug}
            title={title}
            image={coverImage}
            priority={false}
            className="overflow-hidden rounded-br rounded-tl rounded-tr"
          />
        ) : (
          <div
            aria-label={title}
            className="flex aspect-video w-full items-center justify-center rounded-br rounded-tl rounded-tr bg-black font-display text-2xl font-semibold text-white"
          >
            Zeda, Inc.
          </div>
        )}
      </div>

      <div className="gap grid lg:col-span-2 lg:grid-cols-2">
        <div className="col-span-2 flex flex-col-reverse justify-between sm:flex-col lg:col-span-1">
          <div>
            <h3 className="mb-4 leading-snug decoration-2 group-hover:underline md:text-2xl lg:text-3xl">
              {title}
            </h3>
          </div>
          <div className="mb-4 flex flex-wrap gap-1.5 md:mb-0">
            {categories.map((tag, idx) => {
              const isPR = categories.includes('Press Release')
              return (
                <Pill variant={isPR ? 'default' : 'primary'} key={idx}>
                  {tag}
                </Pill>
              )
            })}
            {tags &&
              tags.slice(0, 1).map((tag, idx) => (
                <Pill variant="outline" key={idx}>
                  {tag}
                </Pill>
              ))}
          </div>
        </div>
        <div className="hidden flex-col justify-between lg:flex">
          <p className="mb-4 line-clamp-4 leading-relaxed">{excerpt}</p>
          <div className="pb-2 text-sm font-medium uppercase tracking-wide sm:pt-4 md:pb-0">
            <PostDate dateString={date} />{' '}
            <span className="text-silver-500">
              {estimatedReadingTime && `| ${estimatedReadingTime} min read`}
            </span>
          </div>
        </div>
      </div>
      {/* {author && <Avatar name={author.name} picture={author.picture} />} */}
    </Link>
  )
}

export default PostCard
