import type { Post, PostCategory, Settings } from 'lib/sanity.queries'

import IndexPageHead from 'components/IndexPage/IndexPageHead'
import Layout from 'components/Layout'
import { PostGrid } from 'components/post'
import PageTitle from 'components/ui/PageTitle'

import FeaturedInsights from './FeaturedInsights'

interface PageProps {
  posts: Post[]
  postCategories: PostCategory[]
  settings: Settings
}

const InsightsPage = ({ posts, postCategories, settings }: PageProps) => {
  console.log('postCategories:', postCategories)
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
        <FeaturedInsights posts={posts.slice(0, 2) || []} />
        <PostGrid posts={posts || []} postCategories={postCategories || []} />
      </Layout>
    </>
  )
}

export default InsightsPage