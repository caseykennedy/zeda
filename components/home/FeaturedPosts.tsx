import type { Post } from 'lib/sanity.queries'
import careersBgImg from 'public/images/irridescence.jpg'

import Img from 'components/Img'
import { PostCardSplit } from 'components/post'
import { PostTile } from 'components/post'

interface Props {
  insights: Post[]
  news: Post[]
  press: Post[]
}

const FeaturedPosts = ({ insights, news, press }: Props) => {
  return (
    <section className="relative w-full border-b border-t border-b-black border-t-silver-900 bg-black">
      <div className="mx-auto max-w-site">
        <div>
          {insights.map((post) => (
            <PostCardSplit
              key={post._id}
              coverImage={post.coverImage}
              date={post.date}
              estimatedReadingTime={post.estimatedReadingTime}
              slug={post.slug}
              title={post.title}
              categories={post.categories}
              tags={post.tags}
            />
          ))}
        </div>
        <div className="flex flex-col border-t border-black md:flex-row">
          <div className="relative min-h-[250px] flex-1 bg-moss-500">
            <Img
              src={careersBgImg}
              alt="Abstract wallpaper art"
              fill={true}
              style={{
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />
          </div>
          <div className="flex flex-1 flex-col lg:flex-col xl:flex-row">
            {press.slice(0, 1).map((post) => (
              <PostTile
                key={post._id}
                coverImage={post.coverImage}
                date={post.date}
                estimatedReadingTime={post.estimatedReadingTime}
                slug={post.slug}
                title={post.title}
                categories={post.categories}
                tags={post.tags}
                className="bg-violet-500 text-white"
              />
            ))}
            {news.slice(0, 1).map((post) => (
              <PostTile
                key={post._id}
                coverImage={post.coverImage}
                date={post.date}
                estimatedReadingTime={post.estimatedReadingTime}
                slug={post.slug}
                title={post.title}
                categories={post.categories}
                tags={post.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPosts
