import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
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
    <div className="gap grid w-full md:grid-cols-3">
      <div>
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <div className="flex flex-col justify-between">
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
        <div className="text-sm font-medium uppercase tracking-wide">
          <PostDate dateString={date} />{' '}
          <span className="text-silver-500">
            {estimatedReadingTime && `| ${estimatedReadingTime} min read`}
          </span>
        </div>
      </div>
      {excerpt && (
        <p className="mb-4 line-clamp-3 text-lg leading-relaxed">{excerpt}</p>
      )}
      {/* {author && <Avatar name={author.name} picture={author.picture} />} */}
    </div>
  )
}

export default PostCard
