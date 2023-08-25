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
  const [insights, loadingInsights] = useLiveQuery<Post[]>(
    props.insights,
    indexQuery
  )
  const [news, loadingNews] = useLiveQuery<Post[]>(props.news, indexQuery)
  const [press, loadingPress] = useLiveQuery<Post[]>(props.press, indexQuery)
  const [settings, loadingSettings] = useLiveQuery<Settings>(
    props.settings,
    settingsQuery
  )

  return (
    <IndexPage
      preview
      loading={
        loadingJobPosts ||
        loadingInsights ||
        loadingNews ||
        loadingPress ||
        loadingSettings
      }
      jobPosts={jobPosts || []}
      insights={insights || []}
      news={news || []}
      press={press || []}
      settings={settings || {}}
    />
  )
}
