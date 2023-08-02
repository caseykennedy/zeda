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
    <div className="gap gutter-t grid w-full border-t border-silver-200 first:border-none first:pt-0 md:grid-cols-3">
      <div>
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="mb-3 text-3xl leading-snug">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((tag, idx) => (
              <Pill variant="primary" key={idx}>
                {tag}
              </Pill>
            ))}
            {tags.map((tag, idx) => (
              <Pill variant="outline" key={idx}>
                {tag}
              </Pill>
            ))}
          </div>
        </div>
        <div className="gutter-t text-sm font-medium uppercase tracking-wide">
          <PostDate dateString={date} />{' '}
          <span className="text-silver-500">
            {estimatedReadingTime && `| ${estimatedReadingTime} min read`}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <p className="mb-4 line-clamp-3 text-lg leading-relaxed">{excerpt}</p>
        <Link
          href={`/posts/${slug}`}
          className={cn(
            `group relative flex flex-row items-center text-sm font-medium uppercase tracking-wide`
          )}
        >
          <Icon
            name="arrow-right"
            color="text-emerald-400"
            size={18}
            className="absolute left-0 opacity-0 transition-all group-hover:opacity-100"
          />
          <span className="transition-all ease-out group-hover:translate-x-6">
            Read more
          </span>
        </Link>
      </div>
      {/* {author && <Avatar name={author.name} picture={author.picture} />} */}
    </div>
  )
}

export default PostCard
