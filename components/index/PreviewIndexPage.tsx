import {
  indexQuery,
  type JobPost,
  jobPostQuery,
  type Post,
  type Settings,
  settingsQuery,
} from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'

import { IndexPage, type IndexPageProps } from 'components/index'

export default function PreviewIndexPage(props: IndexPageProps) {
  const [jobPosts, loadingJobPosts] = useLiveQuery<JobPost[]>(
    props.jobPosts,
    jobPostQuery
  )
  const [posts, loadingPosts] = useLiveQuery<Post[]>(props.posts, indexQuery)
  const [settings, loadingSettings] = useLiveQuery<Settings>(
    props.settings,
    settingsQuery
  )

  return (
    <IndexPage
      preview
      loading={loadingJobPosts || loadingPosts || loadingSettings}
      jobPosts={jobPosts || []}
      posts={posts || []}
      settings={settings || {}}
    />
  )
}
