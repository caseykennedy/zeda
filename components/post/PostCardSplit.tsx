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
    <Link
      href={`/posts/${slug}`}
      className="group flex w-full flex-col even:flex-col md:flex-row even:md:flex-row-reverse"
      aria-label={`Read "${title}"`}
    >
      <div className="flex-1">
        {coverImage ? (
          <CoverImage
            image={coverImage}
            title={title}
            priority={true}
            className="aspect-video overflow-hidden"
          />
        ) : (
          <div
            aria-label={title}
            className="flex h-full w-full items-center justify-center bg-black"
          >
            <LogoSymbol width={44} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between bg-black text-white">
        <div className="gutter col-span-2 flex flex-col-reverse justify-between sm:flex-col lg:col-span-1">
          <div>
            <h2 className="mb-4 max-w-[24ch] leading-snug decoration-2 group-hover:underline">
              {title}
            </h2>
          </div>
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
        <div className="gutter flex flex-col justify-between">
          <PostDateReadingTime
            dateString={date}
            estimatedReadingTime={estimatedReadingTime}
            className="pb-2 sm:pt-4 md:pb-0"
          />
        </div>
      </div>
      {/* {author && <Avatar name={author.name} picture={author.picture} />} */}
    </Link>
  )
}

export default PostCardSplit
