import type { Post } from 'lib/sanity.queries'

import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import ScrollProgress from 'components/ScrollProgress'
import Pill from 'components/ui/Pill'

import PostDate from './PostDate'

const PostHeader = ({
  title,
  coverImage,
  date,
  author,
  slug,
  excerpt,
  estimatedReadingTime,
  tags,
  categories,
}: Pick<
  Post,
  | 'title'
  | 'coverImage'
  | 'date'
  | 'author'
  | 'slug'
  | 'excerpt'
  | 'estimatedReadingTime'
  | 'tags'
  | 'categories'
>) => {
  console.log('categories:', categories)
  return (
    <>
      <div className="overflow-hidden pt-header">
        <div className="gutter-x gutter-y mx-auto max-w-site">
          <div className="mb-6 text-sm font-medium uppercase tracking-wide">
            <PostDate dateString={date} />{' '}
            <span className="text-silver-500">
              {estimatedReadingTime && `| ${estimatedReadingTime} min read`}
            </span>
          </div>

          <h1 className="mb-24 max-w-[33ch] text-5xl font-semibold leading-tight tracking-normal md:text-6xl md:leading-tight md:tracking-normal">
            {title}
          </h1>

          <div className="gap grid grid-cols-4">
            <div className="col-span-4 flex items-end lg:col-span-1">
              <div className="flex flex-wrap items-end gap-1.5">
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
            <div className="col-span-4 flex items-end lg:col-span-2 lg:col-start-2">
              <div className="max-w-2xl lg:mx-auto">
                <p className="text-lg font-medium leading-loose">{excerpt}</p>
              </div>
            </div>
          </div>

          {/* <div className="md:mb-12">
            {author && <Avatar name={author.name} picture={author.picture} />}
          </div> */}
        </div>

        <div className="max-h-[860px]">
          <CoverImage title={title} image={coverImage} priority slug={slug} />
        </div>
      </div>
    </>
  )
}

export default PostHeader