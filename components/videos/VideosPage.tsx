import { CardStackPlusIcon } from '@radix-ui/react-icons'
import useLoadMore from 'hooks/useLoadMore'
import type { Settings, VideoPost } from 'lib/sanity.queries'
import ctaImgSrc from 'public/images/bg-rocket.png'

import FooterCTA from 'components/FooterCTA'
import IndexPageHead from 'components/home/IndexPageHead'
import Layout from 'components/Layout'
import { Button, Section } from 'components/ui'
import PageTitle from 'components/ui/PageTitle'

import FeaturedVideoCard from './FeaturedVideoCard'
import VideoCard from './VideoCard'

interface PageProps {
  posts: VideoPost[]
  featuredPosts: VideoPost[]
  settings: Settings
}

const GridSection = ({ posts }: { posts: VideoPost[] }) => {
  const { list, handleLoadMore, hasMore } = useLoadMore(posts, 6)
  return (
    <Section className="dark border-t border-silver-900 bg-black text-white">
      <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {list.map(({ _id, title, date, tags, content, videoURL }) => (
          <VideoCard
            key={_id}
            title={title}
            date={date}
            tags={tags}
            content={content}
            videoURL={videoURL}
          />
        ))}
      </div>

      <div className="gutter-t flex justify-center">
        {hasMore && (
          <Button
            variant="primary"
            onClick={handleLoadMore}
            className="load-more"
          >
            <CardStackPlusIcon className="h-5 w-5 shrink-0 transition-transform duration-200" />
            Load More
          </Button>
        )}
      </div>
    </Section>
  )
}

const VideosPage = ({ posts, featuredPosts, settings }: PageProps) => {
  const featuredPost = featuredPosts[0]
  console.log('featuredPost', featuredPost.content)
  return (
    <>
      <IndexPageHead settings={settings} />
      <Layout>
        <PageTitle className="[&>div]:mt-48">
          <h1 className="mb-2">Videos</h1>
          <p className="max-w-[26ch] text-lg font-medium text-silver-500">
            Get to know our team, our culture, and our manufacturing processes.
          </p>
        </PageTitle>
        <FeaturedVideoCard
          title={featuredPost.title}
          date={featuredPost.date}
          tags={featuredPost.tags}
          content={featuredPost.content}
          videoURL={featuredPost.videoURL}
        />
        <GridSection posts={posts} />
        <FooterCTA
          heading="Join forces with us. Let’s change the world together"
          message="<strong>Contact us</strong><br />We’d love to discuss the design and innovation challenges you are facing."
          src={ctaImgSrc}
          alt="Zeda Inc. - Contact us"
          href="/contact"
          btnText="Get in touch"
        />
      </Layout>
    </>
  )
}

export default VideosPage
