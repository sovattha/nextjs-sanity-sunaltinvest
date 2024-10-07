import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'

// ===============
// POST AND SLUG EXEMPLE
// ===============
export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`

export async function getPosts(client: SanityClient): Promise<Post[]> {
  return await client.fetch(postsQuery)
}

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

export async function getPost(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}

// ===============
// PARTNERS
// ===============

export const partnersQuery = `*[_type == "partner"]{
  _id,
  title,
  "imageUrl": image.asset->url,
  altText,
  description
}`

export async function getPartners(client: SanityClient): Promise<Partner[]> {
  return await client.fetch(partnersQuery)
}

export interface Partner {
  _id: string
  title: string
  imageUrl: string
  altText: string
  description: PortableTextBlock[]
}
