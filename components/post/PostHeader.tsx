import type { Post } from 'lib/sanity.queries'

import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import ScrollProgress from 'components/ScrollProgress'

import PostDate from './PostDate'
import PostTitle from './PostTitle'

export default function PostHeader(
  props: Pick<
    Post,
    | 'title'
    | 'coverImage'
    | 'date'
    | 'author'
    | 'slug'
    | 'excerpt'
    | 'estimatedReadingTime'
  >
) {
  const {
    title,
    coverImage,
    date,
    author,
    slug,
    excerpt,
    estimatedReadingTime,
  } = props
  return (
    <>
      <div className="overflow-hidden pt-header">
        <div className="gutter-x gutter-y mx-auto max-w-site">
          <div className="gutter-b text-sm font-medium uppercase tracking-wide">
            <PostDate dateString={date} />{' '}
            <span className="text-silver-500">
              {estimatedReadingTime && `| ${estimatedReadingTime} min read`}
            </span>
          </div>

          <h1 className="mb-24 max-w-[36ch] text-5xl font-medium leading-tight tracking-normal md:text-6xl md:leading-tight md:tracking-wide">
            {title}
          </h1>

          <div className="grid grid-cols-4">
            <div className="col-span-3 col-start-2">
              <p className="max-w-2xl text-lg">{excerpt}</p>
            </div>
          </div>

          {/* <div className="md:mb-12">
            {author && <Avatar name={author.name} picture={author.picture} />}
          </div> */}
        </div>

        <div className="">
          <CoverImage title={title} image={coverImage} priority slug={slug} />
        </div>
      </div>
    </>
  )
}
