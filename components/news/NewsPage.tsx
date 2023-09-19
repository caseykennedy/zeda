import type { Post, PostCategory, Settings } from 'lib/sanity.queries'
import { LayoutThemes } from 'utils/constants'

import Layout from 'components/Layout'
import PageHead from 'components/PageHead'
import PageTitle, { Heading1FadeIn } from 'components/PageTitle'
import { PostGrid } from 'components/post'

import FeaturedPosts from './FeaturedPosts'

interface PageProps {
  posts: Post[]
  postCategories: PostCategory[]
  settings: Settings
}

const NewsPage = ({ posts, postCategories, settings }: PageProps) => {
  return (
    <>
      <PageHead
        settings={settings}
        page={{
          title: 'News',
          description:
            "Zeda in the news and how we're involved in our community.",
        }}
      />
      <Layout theme={LayoutThemes.LIGHT}>
        <PageTitle theme={LayoutThemes.LIGHT} className="[&>div]:md:mt-48">
          <Heading1FadeIn>
            <h1 className="mb-2">News</h1>
            <p className="max-w-[26ch] text-lg font-medium text-silver-500">
              Zeda in the news and how we&apos;re involved in our community.
            </p>
          </Heading1FadeIn>
        </PageTitle>
        <FeaturedPosts posts={posts.slice(0, 2) || []} />
        <PostGrid posts={posts || []} postCategories={postCategories || []} />
      </Layout>
    </>
  )
}

export default NewsPage
