import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  date,
  excerpt,
  notes,
  tags,
  title,
  video,
  vimeoURL,
  "categories": postCategory[]->name,
  coverImage{
    ...,
    "metadata": asset->metadata
  },
  "slug": slug.current,
  "author": author->{name, picture},
`

const readingTimeFields = groq`
"numberOfCharacters": length(pt::text(content)),
"estimatedWordCount": round(length(pt::text(content)) / 5),
"estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 )
`

export const allPostsAndFeaturedQuery = groq`
{
  "posts": *[_type == "post"] | order(_updatedAt desc) [0...999] {
    ${readingTimeFields},
    ${postFields}
  },
  "featuredPosts": *[_type == "post" && $category in postCategory[]->name] | order(date desc, _updatedAt desc) [0...2] {
    ${readingTimeFields},
    ${postFields}
  }
}
`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${readingTimeFields},
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    ${readingTimeFields},
    ${postFields}
  }
}
`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${readingTimeFields},
  ${postFields}
}
`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export const postCategoryQuery = groq`
*[_type == "postCategory"] | order(date desc, _updatedAt asc) {
  _id,
  name,
  description,
  coverImage{
    ...,
    "metadata": asset->metadata
  },
}
`

export const jobPostQuery = groq`
*[_type == "jobPost"] | order(date desc, _updatedAt desc)
`

export const partnerQuery = groq`*[_type == "partner"] {
  ...,
  logo{
    ...,
    "metadata": asset->metadata
  }
} | order(name asc)
`

export const personQuery = groq`*[_type == "person"] {
  ...,
  picture{
    ...,
    "metadata": asset->metadata
  }
} | order(name asc)
`

export const settingsQuery = groq`*[_type == "settings"][0]`

interface ReadingTime {
  numberOfCharacters?: number
  estimatedWordCount?: number
  estimatedReadingTime?: number
}

export interface SanityImage {
  alt?: string
  caption?: string
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

export interface Author {
  name?: string
  picture: SanityImage
}

export interface JobPost {
  _id: string
  applicationURL?: string
  date?: string
  description?: any
  excerpt?: string
  jobType?: string[]
  location?: string
  slug: string
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

export interface Post extends ReadingTime {
  _id: string
  author?: Author
  categories: string[]
  content?: any
  coverImage?: SanityImage
  date?: string
  excerpt?: string
  notes?: string
  slug?: string
  tags: string[]
  title?: string
  video?: boolean
  vimeoURL?: string
}

export interface PostCategory {
  _id: string
  name: string
  description: string
  coverImage: SanityImage
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
