import { CardStackPlusIcon } from '@radix-ui/react-icons'
import useLoadMore from 'hooks/useLoadMore'
import type { Settings, VideoPost } from 'lib/sanity.queries'
import ctaImgSrc from 'public/images/bg-rocket.png'
import { LayoutThemes } from 'utils/constants'

import { FooterCTA, FooterCTAFigure } from 'components/FooterCTA'
import Layout from 'components/Layout'
import PageHead from 'components/PageHead'
import PageTitle, { Heading1FadeIn } from 'components/PageTitle'
import { Button, Section } from 'components/ui'

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
        {list.map(({ _id, title, tags, videoURL }) => (
          <VideoCard key={_id} title={title} tags={tags} videoURL={videoURL} />
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
  return (
    <>
      <PageHead
        settings={settings}
        page={{
          title: 'Videos',
          description:
            'Get to know our team, our culture, and our manufacturing processes.',
        }}
      />
      <Layout>
        <PageTitle theme={LayoutThemes.DARK} className="[&>div]:mt-48">
          <Heading1FadeIn>
            <h1 className="mb-2">Videos</h1>
            <p className="max-w-[26ch] text-lg font-medium text-silver-500">
              Get to know our team, our culture, and our manufacturing
              processes.
            </p>
          </Heading1FadeIn>
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
          message="<strong>Contact us</strong><br />We'd love to discuss the design and innovation challenges you are facing."
          href="/contact"
          btnText="Get in touch"
        >
          <FooterCTAFigure
            src={ctaImgSrc}
            alt="Zeda Inc. - Contact us"
            className=" object-[-550px_top] sm:object-center"
          />
        </FooterCTA>
      </Layout>
    </>
  )
}

export default VideosPage
