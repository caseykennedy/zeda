import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

import LogoSymbol from 'components/LogoSymbol'
import { CategoryTag } from 'components/post'
import { PostDateReadingTime } from 'components/post'

const slugPath = 'white-papers'

const WhitePaperCard = ({
  title,
  excerpt,
  date,
  estimatedReadingTime,
  tags,
  slug,
}: Pick<
  Post,
  | 'title'
  | 'excerpt'
  | 'coverImage'
  | 'date'
  | 'estimatedReadingTime'
  | 'tags'
  | 'slug'
>) => {
  return (
    <div className="group relative flex h-full flex-col">
      <Link
        href={`/${slugPath}/${slug}`}
        aria-label={title}
        className="flex aspect-video h-full w-full items-center justify-center rounded-br rounded-tl rounded-tr bg-silver-100"
      >
        <LogoSymbol width={44} />
      </Link>
      <Link
        href={`/${slugPath}/${slug}`}
        className="line-clamp-0 gap flex h-full flex-col justify-between border-l border-silver-100 p-4 pt-4 transition-all group-hover:border-silver-700 md:p-6"
        aria-label={`Read "${title}"`}
      >
        <div className="flex flex-col-reverse justify-between">
          <div>
            <div className="mb-4 flex flex-wrap gap-1.5">
              <CategoryTag categories={['White paper']} />
              {/* {tags &&
                tags.slice(0, 1).map((tag, idx) => (
                  <Pill variant="outline" key={idx}>
                    {tag}
                  </Pill>
                ))} */}
            </div>

            <h3
              className="text-2xl decoration-2 group-hover:underline"
              title={title}
            >
              {title}
            </h3>
          </div>
        </div>

        <div className="mt-3">
          {excerpt && (
            <p className="mb-6 line-clamp-2 leading-relaxed">{excerpt}</p>
          )}
          <PostDateReadingTime
            dateString={date}
            estimatedReadingTime={estimatedReadingTime}
          />
        </div>
      </Link>
    </div>
  )
}

export default WhitePaperCard
