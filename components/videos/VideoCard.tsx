import type { VideoPost } from 'lib/sanity.queries'
import { cn } from 'utils'

import { Pill } from 'components/ui'

import VideoPlayer from './VideoPlayer'

export interface FeaturedProps extends VideoPost {
  className?: string
}

const VideoCard = ({
  title,
  tags,
  videoURL,
  className,
}: Pick<FeaturedProps, 'title' | 'tags' | 'videoURL' | 'className'>) => {
  return (
    <div className={cn(`flex flex-col gap-6`, className)}>
      <div className="aspect-video w-full">
        <VideoPlayer videoURL={videoURL} />
      </div>

      <div className="flex flex-col">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {tags &&
              tags.slice(0, 1).map((tag, idx) => (
                <Pill variant="ghost" key={idx}>
                  {tag}
                </Pill>
              ))}
          </div>
          <h3 className="mb-3 line-clamp-3 text-2xl">{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
