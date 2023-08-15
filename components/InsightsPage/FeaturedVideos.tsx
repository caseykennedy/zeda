import type { VideoPost } from 'lib/sanity.queries'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import post from 'schemas/post'

import { CategoryTag, PostDate, PostDateReadingTime } from 'components/post'
import { Button, Pill, Separator } from 'components/ui'
// import { VideoCard } from 'components/post'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

const Featured = ({
  title,
  date,
  tags,
  slug,
  videoURL,
}: Pick<VideoPost, 'title' | 'date' | 'tags' | 'slug' | 'videoURL'>) => {
  return (
    <div className="gap grid grid-cols-9">
      <div className="gap order-2 col-span-9 flex h-full flex-col justify-between md:order-1 md:col-span-4 lg:col-span-3">
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

          <div>
            <PostDate
              dateString={date}
              className="text-sm font-medium uppercase tracking-wide"
            />
          </div>
        </div>
      </div>

      <div className="order-1 col-span-9 flex aspect-video items-center justify-center md:order-2 md:col-span-5 md:col-start-5 lg:col-span-6 lg:col-start-4">
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
          {/* <div>
            <Button variant="primary" asChild>
              <Link href="/news">All videos</Link>
            </Button>
          </div> */}
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
        <div className="mx-auto grid max-w-site grid-cols-1 md:grid-cols-2">
          {videos
            .slice(1, 3)
            .map(({ videoURL, _id, title, date, tags, slug }) => (
              <div
                key={_id}
                className="gutter gap flex flex-col flex-nowrap border-silver-900 last:border-t sm:flex-row md:last:border-l md:last:border-t-0"
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
            ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedVideos
