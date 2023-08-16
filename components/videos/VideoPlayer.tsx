import type { VideoPost } from 'lib/sanity.queries'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

const VideoPlayer = ({ videoURL }: Pick<VideoPost, 'videoURL'>) => {
  return (
    <section className="overflow-hidden bg-black pt-header">
      <div className="gutter-x gutter-y mx-auto max-w-site">
        <div className="mx-auto aspect-video h-full max-w-[1080px]">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            playing
            light
            // playIcon={}
            url={videoURL}
          />
        </div>
      </div>
    </section>
  )
}

export default VideoPlayer
