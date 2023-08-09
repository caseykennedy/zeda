import type { Post, Settings, WhitePaper } from 'lib/sanity.queries'

import IndexPageHead from 'components/IndexPage/IndexPageHead'
import Layout from 'components/Layout'
import PageTitle from 'components/ui/PageTitle'
import Section from 'components/ui/Section'

import FeaturedInsights from './FeaturedInsights'
import PostGrid from './PostGrid'

interface PageProps {
  posts: Post[]
  featuredPosts: Post[]
  settings: Settings
  whitePapers: WhitePaper[]
}

const GridSection = ({
  title,
  subTitle,
  posts,
  whitePapers,
}: {
  title: string
  subTitle: string
  posts?: Post[]
  whitePapers?: WhitePaper[]
}) => (
  <Section>
    <h2 className="mb-4 text-3xl">{title}</h2>
    <p className="gutter-b max-w-[24ch] text-lg text-silver-500">{subTitle}</p>
    <PostGrid posts={posts} whitePapers={whitePapers} />
  </Section>
)

const InsightsPage = ({
  posts,
  featuredPosts,
  settings,
  whitePapers,
}: PageProps) => {
  console.log('whitePapers:', whitePapers)
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
          title="Articles"
          subTitle="Data-rich industry insights from our experts and engineers."
          posts={posts}
        />
        <Section className="bg-black text-white">Videos</Section>
        <GridSection
          title="White papers"
          subTitle="Data-rich industry insights from our experts and engineers."
          whitePapers={whitePapers}
        />
      </Layout>
    </>
  )
}

export default InsightsPage
