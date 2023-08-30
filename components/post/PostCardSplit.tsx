import { ArrowRightIcon } from '@radix-ui/react-icons'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

import CoverImage from 'components/CoverImage'
import LogoSymbol from 'components/LogoSymbol'
import { Pill } from 'components/ui'

import CategoryTag from './CategoryTag'
import PostDateReadingTime from './PostDateReadingTime'

const PostCardSplit = ({
  title,
  coverImage,
  date,
  estimatedReadingTime,
  tags,
  categories = [],
  slug,
}: Pick<
  Post,
  | 'title'
  | 'coverImage'
  | 'date'
  | 'estimatedReadingTime'
  | 'tags'
  | 'categories'
  | 'slug'
>) => {
  return (
    <div className="flex w-full flex-col even:flex-col md:flex-row even:md:flex-row-reverse">
      <Link
        href={`/posts/${slug}`}
        aria-label={`Read "${title}"`}
        className="group flex-1"
        prefetch={false}
      >
        {coverImage ? (
          <CoverImage
            image={coverImage}
            title={title}
            priority={true}
            className="overflow-hidden"
          />
        ) : (
          <div
            aria-label={title}
            className="flex h-full w-full items-center justify-center bg-black"
          >
            <LogoSymbol width={44} />
          </div>
        )}
      </Link>

      <Link
        href={`/posts/${slug}`}
        aria-label={`Read "${title}"`}
        className="group flex flex-1 flex-col justify-between bg-black text-white"
        prefetch={false}
      >
        <div className="gutter col-span-2 flex flex-col justify-between sm:flex-col lg:col-span-1">
          <div className="flex w-full flex-col even:flex-col md:flex-row even:md:flex-row-reverse">
            <h2 className="mb-4 max-w-[24ch] leading-snug decoration-2 group-hover:underline">
              {title}
            </h2>
          </div>
          <div className="mb-10 flex flex-wrap gap-1.5 md:mb-0">
            <CategoryTag categories={categories} />
            {tags &&
              tags.slice(0, 1).map((tag, idx) => (
                <Pill variant="outline" key={idx}>
                  {tag}
                </Pill>
              ))}
          </div>
        </div>
        <div className="gutter flex flex-row items-center justify-between">
          <PostDateReadingTime
            dateString={date}
            estimatedReadingTime={estimatedReadingTime}
          />
          <ArrowRightIcon className="h-6 w-6 -translate-x-6 opacity-0 transition-all group-hover:translate-x-0 group-hover:text-white group-hover:opacity-100" />
          {/* <ArrowLink href={`/posts/${slug}`} className="text-white">
            Read more
          </ArrowLink> */}
        </div>
      </Link>
    </div>
  )
}

export default PostCardSplit
