import type { Post } from 'lib/sanity.queries'

import CoverImage from 'components/CoverImage'
import LogoSymbol from 'components/LogoSymbol'
import SocialShare from 'components/SocialShare'
import { Pill } from 'components/ui'

import CategoryTag from './CategoryTag'
import PostDateReadingTime from './PostDateReadingTime'

const PostHeader = ({
  title,
  coverImage,
  date,
  excerpt,
  estimatedReadingTime,
  tags,
  categories,
  slug,
}: Pick<
  Post,
  | 'title'
  | 'coverImage'
  | 'date'
  | 'excerpt'
  | 'estimatedReadingTime'
  | 'tags'
  | 'categories'
  | 'slug'
>) => {
  console.log('categories:', categories)
  return (
    <>
      <section className="overflow-hidden bg-white pt-header">
        <div className="gutter-x gutter-y mx-auto max-w-site">
          <PostDateReadingTime
            dateString={date}
            estimatedReadingTime={estimatedReadingTime}
            className="mb-6"
          />

          <h1 className="mb-16 max-w-[30ch] text-4xl font-semibold leading-tight tracking-normal md:mb-24 md:text-6xl md:leading-tight md:tracking-normal">
            {title}
          </h1>

          <div className="gap grid grid-cols-4">
            <div className="col-span-4 flex items-end lg:col-span-1">
              <div className="flex flex-wrap items-end gap-1.5">
                <CategoryTag categories={categories || []} />
                {tags &&
                  tags.slice(0, 2).map((tag, idx) => (
                    <Pill variant="outline" key={idx}>
                      {tag}
                    </Pill>
                  ))}
              </div>
            </div>
            <div className="col-span-4 flex items-end lg:col-span-2 lg:col-start-2 ">
              <div className="w-full max-w-2xl lg:mx-auto">
                <p className="text-lg font-medium leading-loose">{excerpt}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative max-h-[860px] overflow-hidden">
        {coverImage ? (
          <CoverImage title={title} image={coverImage} priority={true} />
        ) : (
          <div
            aria-label={title}
            className="flex w-full items-center justify-center bg-black py-44 font-display text-3xl font-semibold text-silver-800 md:py-64"
          >
            <LogoSymbol width={64} />
            {/* Press Release */}
          </div>
        )}
        <div className="absolute right-4 top-4 flex flex-row gap-1 md:right-8 md:top-8 md:flex-col lg:right-10 lg:top-10">
          <SocialShare name="linkedin" slug={slug} />
          <SocialShare name="twitter" slug={slug} />
          <SocialShare name="share" slug={slug} />
        </div>
      </section>
    </>
  )
}

export default PostHeader
