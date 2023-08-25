import { CardStackPlusIcon } from '@radix-ui/react-icons'
import useLoadMore from 'hooks/useLoadMore'
import type {
  Post,
  Settings,
  VideoPost,
  WhitePaperPost,
} from 'lib/sanity.queries'
import ctaImgSrc from 'public/images/bg-rocket.png'

import FooterCTA from 'components/FooterCTA'
import IndexPageHead from 'components/index/IndexPageHead'
import Layout from 'components/Layout'
import { Button } from 'components/ui'
import PageTitle from 'components/ui/PageTitle'
import Section from 'components/ui/Section'

import FeaturedInsights from './FeaturedInsights'
import FeaturedVideos from './FeaturedVideos'
import PostGrid from './PostGrid'

interface PageProps {
  posts: Post[]
  featuredPosts: Post[]
  settings: Settings
  whitePapers: WhitePaperPost[]
  videoPosts: VideoPost[]
}

const GridSection = ({
  id,
  title,
  subTitle,
  posts,
  whitePaper = false,
}: {
  id: string
  title: string
  subTitle: string
  posts: Post[]
  whitePaper?: boolean
}) => {
  const { list, handleLoadMore, hasMore } = useLoadMore(posts, 3)

  return (
    <Section id={id}>
      <h2 className="mb-2 text-3xl">{title}</h2>
      <p className="gutter-b max-w-[24ch] text-lg text-silver-500">
        {subTitle}
      </p>

      <PostGrid posts={list} whitePaper={whitePaper} />

      <div className="gutter-t flex justify-center">
        {hasMore && (
          <Button
            variant="outline"
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

const InsightsPage = ({
  posts,
  featuredPosts,
  settings,
  whitePapers,
  videoPosts,
}: PageProps) => {
  // console.log('posts', featuredPosts)
  return (
    <>
      <IndexPageHead settings={settings} />
      <Layout>
        <PageTitle className="[&>div]:mt-48">
          <h1 className="mb-2">Insights</h1>
          <p className="max-w-[26ch] text-lg font-medium text-silver-500">
            Data-rich industry insights from our experts and engineers.
          </p>
        </PageTitle>
        <FeaturedInsights posts={featuredPosts} />
        <GridSection
          id="articles"
          title="Articles"
          subTitle="Data-rich industry insights from our experts and engineers."
          posts={posts}
        />
        <FeaturedVideos videos={videoPosts} />
        <GridSection
          id="white-papers"
          title="White papers"
          subTitle="Industry experience and knowledge."
          posts={whitePapers}
          whitePaper={true}
        />
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

export default InsightsPage
