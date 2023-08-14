import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

import LogoSymbol from 'components/LogoSymbol'
import { CategoryTag, PostDate } from 'components/post'
import Pill from 'components/ui/Pill'

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
        className="flex aspect-video w-full items-center justify-center rounded-br rounded-tl rounded-tr bg-silver-100"
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
              {tags &&
                tags.slice(0, 1).map((tag, idx) => (
                  <Pill variant="outline" key={idx}>
                    {tag}
                  </Pill>
                ))}
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
          {/* {excerpt && (
            <p className="mb-6 line-clamp-2 leading-relaxed">{excerpt}</p>
          )} */}
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

export default WhitePaperCard