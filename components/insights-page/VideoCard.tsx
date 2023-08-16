import type { VideoPost } from 'lib/sanity.queries'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { cn } from 'utils'

import { CategoryTag, PostDate } from 'components/post'
import { Pill } from 'components/ui'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

interface FeaturedProps extends VideoPost {
  className?: string
}

const VideoCard = ({
  title,
  date,
  tags,
  slug,
  videoURL,
  className,
}: Pick<
  FeaturedProps,
  'title' | 'date' | 'tags' | 'slug' | 'videoURL' | 'className'
>) => {
  return (
    <div
      className={cn(
        `gutter gap flex flex-col flex-nowrap border-silver-900 last:border-t sm:flex-row md:last:border-l md:last:border-t-0`,
        className
      )}
    >
      <div className="aspect-video w-full flex-1">
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          light
          url={videoURL}
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="mb-4 text-2xl">{title}</h3>
          <div className="flex gap-2">
            <CategoryTag categories={['Video']} />
            {tags &&
              tags.slice(0, 1).map((tag, idx) => (
                <Pill variant="ghost" key={idx}>
                  {tag}
                </Pill>
              ))}
          </div>
        </div>

        <div>
          <PostDate
            dateString={date}
            className="text-sm font-medium uppercase tracking-wide"
          />
        </div>
      </div>
    </div>
  )
}

export default VideoCard
