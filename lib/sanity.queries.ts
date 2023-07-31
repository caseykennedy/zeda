import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const jobPostQuery = groq`
*[_type == "jobPost"] | order(date desc, _updatedAt desc)
`

export const partnerQuery = groq`*[_type == "partner"]{
  ...,
  logo{
    ...,
    "metadata": asset->metadata
  }
} | order(name asc)`

export const personQuery = groq`*[_type == "person"]{
  ...,
  picture{
    ...,
    "metadata": asset->metadata
  }
} | order(name asc)`

export const settingsQuery = groq`*[_type == "settings"][0]`

export interface SanityImage {
  alt: string
  asset: {
    _ref: string
    _type: string
  }
  metadata: {
    lqip: string
    blurhash: string
    dimensions: {
      aspecRatio: number
      height: number
      width: number
    }
  }
}

export interface Slug {
  current: string
}

export interface Author {
  name?: string
  picture: SanityImage
}

export interface JobPost {
  _createdAt: string
  _id: string
  _updatedAt: string
  applicationURL?: string
  date?: string
  description?: any
  excerpt?: string
  jobType?: string[]
  location?: string
  slug: Slug
  title: string
  travel?: string
}

export interface Partner {
  name: string
  logo: SanityImage
}

export interface Person {
  name: string
  position: string
  bio: string
  linkedinURL?: string
  picture: SanityImage
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
