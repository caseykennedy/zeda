import type { VideoPost } from 'lib/sanity.queries'
import Link from 'next/link'
import { cn } from 'utils'

import { CategoryTag, PostDate } from 'components/post'
import { Button, Pill } from 'components/ui'
import { VideoPlayer, VideoPostBody } from 'components/videos'

const FeaturedCard = ({
  title,
  date,
  tags,
  content,
  videoURL,
}: Pick<
  VideoPost,
  'title' | 'date' | 'tags' | 'slug' | 'content' | 'videoURL'
>) => {
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
          <div className="mb-6 line-clamp-3 text-silver-500">
            <VideoPostBody content={content} />
          </div>

          <div>
            <PostDate
              dateString={date}
              className="text-sm font-medium uppercase tracking-wide"
            />
          </div>
        </div>
      </div>

      <div className="order-1 col-span-9 flex aspect-video items-center justify-center md:order-2 md:col-span-5 md:col-start-5 lg:col-span-6 lg:col-start-4">
        <VideoPlayer videoURL={videoURL} />
      </div>
    </div>
  )
}

interface FeaturedProps extends VideoPost {
  className?: string
}

const HighlightCard = ({
  title,
  tags,
  videoURL,
  className,
}: Pick<
  FeaturedProps,
  'title' | 'date' | 'tags' | 'slug' | 'videoURL' | 'className'
>) => {
  return (
    <div className={cn(`gap flex flex-col flex-nowrap sm:flex-row`, className)}>
      <div className="aspect-video w-full flex-1">
        <VideoPlayer videoURL={videoURL} />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="mb-4 line-clamp-3 text-2xl">{title}</h3>
          <div className="mb-8 flex flex-wrap gap-2">
            <CategoryTag categories={['Video']} />
            {tags &&
              tags.slice(0, 1).map((tag, idx) => (
                <Pill variant="ghost" key={idx}>
                  {tag}
                </Pill>
              ))}
          </div>
        </div>

        {/* <div>
          <PostDate
            dateString={date}
            className="text-sm font-medium uppercase tracking-wide"
          />
        </div> */}
      </div>
    </div>
  )
}

const FeaturedVideos = ({ videos }: { videos: VideoPost[] }) => {
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
            <Button variant="outline" asChild>
              <Link href="/videos">All videos</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="gutter mx-auto grid w-full max-w-site grid-cols-1">
        {videos
          .slice(0, 1)
          .map(({ videoURL, _id, title, date, tags, slug, content }) => (
            <FeaturedCard
              key={_id}
              date={date}
              slug={slug}
              tags={tags}
              title={title}
              content={content}
              videoURL={videoURL}
            />
          ))}
      </div>

      {/* <Separator /> */}

      <div className="gutter-y border-t border-silver-900">
        <div className="gutter-x mx-auto grid max-w-site grid-cols-1 gap-8 lg:grid-cols-2">
          {videos
            .slice(1, 3)
            .map(({ videoURL, _id, title, date, tags, slug }) => (
              <HighlightCard
                key={_id}
                date={date}
                slug={slug}
                tags={tags}
                title={title}
                videoURL={videoURL}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedVideos
