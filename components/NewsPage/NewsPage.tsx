import type { Post, Settings } from 'lib/sanity.queries'

import IndexPageHead from 'components/IndexPage/IndexPageHead'
import Layout from 'components/Layout'
import PageTitle from 'components/ui/PageTitle'

import FeaturedPosts from './FeaturedPosts'
import PostGrid from './PostGrid'

interface PageProps {
  posts: Post[]
  settings: Settings
}

const NewsPage = ({ posts, settings }: PageProps) => {
  return (
    <>
      <IndexPageHead settings={settings} />
      <Layout theme="light">
        <PageTitle className="[&>div]:mt-48">
          <h1 className="mb-2">News</h1>
          <p className="max-w-[26ch] text-lg font-medium text-silver-500">
            Zeda in the news and how we&apos;re involved in our community.
          </p>
        </PageTitle>
        <FeaturedPosts posts={posts.slice(0, 2) || []} />
        <PostGrid posts={posts} />
      </Layout>
    </>
  )
}

export default NewsPage
