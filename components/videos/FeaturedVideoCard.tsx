import type { VideoPost } from 'lib/sanity.queries'

import { CategoryTag, PostDate } from 'components/post'
import { Pill } from 'components/ui'
import { Section } from 'components/ui'

import VideoPlayer from './VideoPlayer'
import VideoPostBody from './VideoPostBody'

const FeaturedVideoCard = ({
  title,
  date,
  tags,
  content,
  videoURL,
}: Pick<VideoPost, 'title' | 'date' | 'tags' | 'content' | 'videoURL'>) => {
  return (
    <Section className="dark border-t border-silver-900 bg-black text-white">
      <div className="gap grid grid-cols-9">
        <div className="gap order-2 col-span-9 flex h-full flex-col justify-between md:order-1 md:col-span-4 lg:col-span-3">
          <div>
            <h2 className="mb-6">{title}</h2>

            <div className="flex gap-2">
              <CategoryTag categories={['Featured']} />
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
    </Section>
  )
}

export default FeaturedVideoCard
