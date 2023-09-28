import { CardStackPlusIcon } from '@radix-ui/react-icons'
import useLoadMore from 'hooks/useLoadMore'
import type {
  Post,
  Settings,
  VideoPost,
  WhitePaperPost,
} from 'lib/sanity.queries'
import { LayoutThemes } from 'utils/constants'

import Layout from 'components/Layout'
import PageHead from 'components/PageHead'
import PageTitle, { Heading1FadeIn } from 'components/PageTitle'
import { Button, Section } from 'components/ui'

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
  posts: Post[] | WhitePaperPost[]
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
  return (
    <>
      <PageHead
        settings={settings}
        page={{
          title: 'Insights',
          description:
            'Data-rich industry insights from our multidisciplinary experts and engineers.',
        }}
      />
      <Layout>
        <PageTitle theme={LayoutThemes.DARK} className="[&>div]:md:mt-60">
          <Heading1FadeIn>
            <h1 className="mb-2">Insights</h1>
            <p className="max-w-[26ch] text-lg font-medium text-silver-500">
              Data-rich industry insights from our experts and engineers.
            </p>
          </Heading1FadeIn>
        </PageTitle>
        <FeaturedInsights posts={featuredPosts} />
        <GridSection
          id="articles"
          title="Articles"
          subTitle="Industry deep-dives and analysis."
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
      </Layout>
    </>
  )
}

export default InsightsPage
