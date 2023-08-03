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
    <div className="group relative flex flex-col">
      <CoverImage
        slug={slug}
        title={title}
        image={coverImage}
        priority={false}
        className="overflow-hidden rounded-tl rounded-tr"
      />
      <Link
        href={`/posts/${slug}`}
        className="line-clamp-0 gap flex h-full flex-col justify-between border-l border-silver-100 p-6 pt-4 transition-all group-hover:border-silver-500"
        aria-label={`Read "${title}"`}
      >
        <div className="flex flex-col-reverse justify-between">
          <div>
            <div className="mb-3 flex flex-wrap gap-1.5">
              {categories.map((tag, idx) => (
                <Pill variant="primary" key={idx}>
                  {tag}
                </Pill>
              ))}
              {/* {tags.slice(0, 1).map((tag, idx) => (
                <Pill variant="outline" key={idx}>
                  {tag}
                </Pill>
              ))} */}
            </div>

            <h3
              className="gutter-r text-2xl decoration-2 group-hover:underline"
              title={title}
            >
              {title}
            </h3>
          </div>
        </div>

        <div className="mt-8">
          {/* <p className="mb-6 line-clamp-2 leading-relaxed">{excerpt}</p> */}
          <div className="text-sm font-medium uppercase tracking-wide">
            <PostDate dateString={date} />{' '}
            <span className="text-silver-500">
              {estimatedReadingTime && `| ${estimatedReadingTime} min read`}
            </span>
          </div>
          {/* <div>
            <Link
              href={`/posts/${slug}`}
              className={cn(
                `group relative inline-flex flex-row items-center text-sm font-medium uppercase tracking-wide`
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
          </div> */}
        </div>
      </Link>
    </div>
  )
}

export default PostCard
