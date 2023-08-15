import ReactPlayer from 'react-player/vimeo'
import type { VideoPost } from 'lib/sanity.queries'
import Link from 'next/link'
import post from 'schemas/post'

import { CategoryTag, PostDate, PostDateReadingTime } from 'components/post'
import { Button, Pill, Separator } from 'components/ui'
// import { VideoCard } from 'components/post'

const Featured = ({
  title,
  date,
  tags,
  slug,
  videoURL,
}: Pick<VideoPost, 'title' | 'date' | 'tags' | 'slug' | 'videoURL'>) => {
  return (
    <div className="gap grid grid-cols-9">
      <div className="gap col-span-9 flex h-full flex-col justify-between md:col-span-4 lg:col-span-3">
        <div>
          <h2 className="mb-6">{title}</h2>

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
          <p className="line-clamp-3 text-silver-500">
            Dream big and be open to taking risks. Innovation happens through
            optimism, positivity, rigorous thinking, and hard work.
          </p>

          <div className="text-sm font-medium uppercase tracking-wide">
            <PostDate dateString={date} />
          </div>
        </div>
      </div>
      <div className="col-span-9 flex aspect-video items-center justify-center md:col-span-5 md:col-start-5 lg:col-span-6 lg:col-start-4">
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          light
          // playIcon={}
          url={videoURL}
          responsive
        ></ReactPlayer>
      </div>
    </div>
  )
}

const FeaturedVideos = ({ videos }: { videos: VideoPost[] }) => {
  console.log('videos:', videos)
  return (
    <section id="videos" className="dark relative w-full bg-black text-white">
      <div className="border-b border-silver-900">
        <div className="gutter-x mx-auto flex max-w-site items-center justify-between py-6">
          <div>
            <h2 className="font-sans text-base font-medium uppercase tracking-wide text-silver-500">
              Videos
            </h2>
          </div>
          <div>
            <Button variant="primary" asChild>
              <Link href="/news">All videos</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="gutter mx-auto grid w-full max-w-site grid-cols-1">
        {videos
          .slice(0, 1)
          .map(({ videoURL, _id, title, date, tags, slug }) => (
            <Featured
              key={_id}
              date={date}
              slug={slug}
              tags={tags}
              title={title}
              videoURL={videoURL}
            />
          ))}
      </div>

      {/* <Separator /> */}

      <div className="border-t border-silver-900">
        <div className="mx-auto  grid max-w-site grid-cols-1 md:grid-cols-2">
          {videos
            .slice(1, 3)
            .map(({ videoURL, _id, title, date, tags, slug }) => (
              <div
                key={_id}
                className="gutter border-silver-900 last:border-t md:last:border-l md:last:border-t-0"
              >
                <h3 className="text-2xl">{title}</h3>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedVideos
