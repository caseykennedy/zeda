import { cn } from 'utils'

import PostDate from './PostDate'

const PostDateReadingTime = ({
  dateString,
  estimatedReadingTime,
  className,
}: {
  dateString?: string
  estimatedReadingTime?: number
  className?: string
}) => (
  <div className={cn(`text-sm font-medium uppercase tracking-wide`, className)}>
    <PostDate dateString={dateString} />{' '}
    <span className={cn(`text-silver-500`, className)}>
      {estimatedReadingTime && `| ${estimatedReadingTime} min read`}
    </span>
  </div>
)

export default PostDateReadingTime
