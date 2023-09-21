import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  allPostsAndFeaturedQuery,
  allPostsByCategoryAndFeaturedQuery,
  allPostsByCategoryQuery,
  allVideoPostsAndFeaturedQuery,
  allVideoPostsQuery,
  allWhitePapersQuery,
  featuredPostsByCategoryQuery,
  featuredVideoPostsQuery,
  indexQuery,
  type JobPost,
  jobPostQuery,
  type Leadership,
  leadershipByDepartmentQuery,
  type Partner,
  partnerQuery,
  type Person,
  personQuery,
  type Post,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  type PostCategory,
  postCategoryQuery,
  postSlugsQuery,
  type Settings,
  settingsQuery,
  type VideoPost,
  videoPostAndMoreVideosQuery,
  videoPostBySlugQuery,
  videoPostSlugsQuery,
  whitePaperAndMorePostsQuery,
  whitePaperBySlugQuery,
  type WhitePaperPost,
  whitePaperSlugsQuery,
} from 'lib/sanity.queries'
import { createClient, type SanityClient } from 'next-sanity'

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
  })
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}

export const getSanityImageConfig = () => getClient()

export async function getSettings(client: SanityClient): Promise<Settings> {
  return (await client.fetch(settingsQuery)) || {}
}

export async function getAllJobPosts(client: SanityClient): Promise<JobPost[]> {
  return (await client.fetch(jobPostQuery)) || []
}

export async function getAllPartners(client: SanityClient): Promise<Partner[]> {
  return (await client.fetch(partnerQuery)) || []
}

export async function getAllPeople(client: SanityClient): Promise<Person[]> {
  return (await client.fetch(personQuery)) || []
}

export async function getLeadershipByDepartment(
  client: SanityClient,
  department: string
): Promise<Leadership> {
  return await client.fetch(leadershipByDepartmentQuery, { department })
}

export async function getAllPosts(client: SanityClient): Promise<Post[]> {
  return (await client.fetch(indexQuery)) || []
}
export async function getAllPostCategories(
  client: SanityClient
): Promise<PostCategory[]> {
  return (await client.fetch(postCategoryQuery)) || []
}

export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  const client = getClient()
  const slugs = (await client.fetch<string[]>(postSlugsQuery)) || []
  return slugs.map((slug) => ({ slug }))
}

export async function getPostBySlug(
  client: SanityClient,
  slug: string | undefined
): Promise<Post> {
  return (await client.fetch(postBySlugQuery, { slug })) || ({} as any)
}

export async function getPostAndMoreStories(
  client: SanityClient,
  slug: string | undefined
): Promise<{ post: Post; morePosts: Post[] }> {
  return await client.fetch(postAndMoreStoriesQuery, { slug })
}

export async function getAllPostsAndFeatured(
  client: SanityClient,
  category: string
): Promise<{ posts: Post[]; featuredPosts: Post[] }> {
  return await client.fetch(allPostsAndFeaturedQuery, { category })
}

export async function getAllPostsByCategory(
  client: SanityClient,
  category: string
): Promise<{ posts: Post[] }> {
  return await client.fetch(allPostsByCategoryQuery, { category })
}

export async function getAllPostsByCategoryAndFeatured(
  client: SanityClient,
  category: string
): Promise<{ posts: Post[]; featuredPosts: Post[] }> {
  return await client.fetch(allPostsByCategoryAndFeaturedQuery, { category })
}

export async function getFeaturedPostsByCategoryQuery(
  client: SanityClient,
  category: string
): Promise<Post[]> {
  return await client.fetch(featuredPostsByCategoryQuery, { category })
}

export async function getAllWhitePapers(
  client: SanityClient
): Promise<WhitePaperPost[]> {
  return (await client.fetch(allWhitePapersQuery)) || []
}

export async function getAllWhitePapersSlugs(): Promise<
  Pick<WhitePaperPost, 'slug'>[]
> {
  const client = getClient()
  const slugs = (await client.fetch<string[]>(whitePaperSlugsQuery)) || []
  return slugs.map((slug) => ({ slug }))
}

export async function getWhitePaperBySlug(
  client: SanityClient,
  slug: string | undefined
): Promise<WhitePaperPost> {
  return (await client.fetch(whitePaperBySlugQuery, { slug })) || ({} as any)
}

export async function getWhitePaperAndMorePosts(
  client: SanityClient,
  slug: string | undefined
): Promise<{ post: Post; morePosts: Post[] }> {
  return await client.fetch(whitePaperAndMorePostsQuery, { slug })
}

export async function getAllVideoPosts(
  client: SanityClient
): Promise<VideoPost[]> {
  return (await client.fetch(allVideoPostsQuery)) || []
}

export async function getFeaturedVideoPosts(
  client: SanityClient
): Promise<VideoPost[]> {
  return (await client.fetch(featuredVideoPostsQuery)) || []
}

export async function getAllVideoPostsAndFeatured(
  client: SanityClient
): Promise<{ posts: VideoPost[]; featuredPosts: VideoPost[] }> {
  return await client.fetch(allVideoPostsAndFeaturedQuery)
}

export async function getVideoPostAndMoreVideos(
  client: SanityClient,
  slug: string | undefined
): Promise<{ post: VideoPost; morePosts: VideoPost[] }> {
  return await client.fetch(videoPostAndMoreVideosQuery, { slug })
}

export async function getAllVideoPostsSlugs(): Promise<
  Pick<VideoPost, 'slug'>[]
> {
  const client = getClient()
  const slugs = (await client.fetch<string[]>(videoPostSlugsQuery)) || []
  return slugs.map((slug) => ({ slug }))
}

export async function getVideoPostBySlug(
  client: SanityClient,
  slug: string | undefined
): Promise<VideoPost> {
  return (await client.fetch(videoPostBySlugQuery, { slug })) || ({} as any)
}
