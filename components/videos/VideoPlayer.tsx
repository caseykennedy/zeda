import type { VideoPost } from 'lib/sanity.queries'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

const VideoPlayer = ({ videoURL }: Pick<VideoPost, 'videoURL'>) => (
  <ReactPlayer
    width="100%"
    height="100%"
    controls
    playing
    light
    // playIcon={}
    url={videoURL}
  />
)

export default VideoPlayer
