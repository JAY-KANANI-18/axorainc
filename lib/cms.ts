import groq from 'groq'
import {sanityClient} from './sanity'
import type {BlogPost} from '../data/blogPosts'
import type {ServicePage} from '../data/services'
import type {HirePage} from '../data/hire'

async function safeFetch<T>(query: string, params: Record<string, any> = {}): Promise<T | null> {
  try {
    const data = await sanityClient.fetch<T>(query, params)
    return data as any
  } catch {
    return null
  }
}

// BLOG
const BLOG_LIST = groq`*[_type == "blogPost"]|order(date desc){
  "slug": slug.current,
  title,
  excerpt,
  "date": coalesce(date, _createdAt),
  author,
  category,
  readTime,
  image,
  ogImage,
  keywords,
  content[]{ heading, paragraphs }
}`

const BLOG_BY_SLUG = groq`*[_type == "blogPost" && slug.current == $slug][0]{
  "slug": slug.current,
  title,
  excerpt,
  "date": coalesce(date, _createdAt),
  author,
  category,
  readTime,
  image,
  ogImage,
  keywords,
  content[]{ heading, paragraphs }
}`

const BLOG_SLUGS = groq`*[_type == "blogPost" && defined(slug.current)]{ "slug": slug.current }`

export async function fetchBlogPosts(): Promise<BlogPost[] | null> {
  const data = await safeFetch<any[]>(BLOG_LIST)
  if (!data || !Array.isArray(data) || data.length === 0) return null
  return data as BlogPost[]
}

export async function fetchBlogSlugs(): Promise<string[] | null> {
  const data = await safeFetch<{slug: string}[]>(BLOG_SLUGS)
  if (!data) return null
  return data.map((d) => d.slug)
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const data = await safeFetch<BlogPost>(BLOG_BY_SLUG, {slug})
  return data
}

// SERVICES
const SERVICE_LIST = groq`*[_type == "service"]|order(date desc){
  "slug": slug.current,
  title,
  excerpt,
  "date": coalesce(date, _createdAt),
  category,
  readTime,
  image,
  ogImage,
  keywords,
  benefits,
  useCases,
  content[]{ heading, paragraphs },
  faqs[]{ question, answer },
  caseStudy{ title, summary, results, date, image }
}`

const SERVICE_SLUGS = groq`*[_type == "service" && defined(slug.current)]{ "slug": slug.current }`

const SERVICE_BY_SLUG = groq`*[_type == "service" && slug.current == $slug][0]{
  "slug": slug.current,
  title,
  excerpt,
  "date": coalesce(date, _createdAt),
  category,
  readTime,
  image,
  ogImage,
  keywords,
  benefits,
  useCases,
  content[]{ heading, paragraphs },
  faqs[]{ question, answer },
  caseStudy{ title, summary, results, date, image }
}`

export async function fetchServices(): Promise<ServicePage[] | null> {
  const data = await safeFetch<any[]>(SERVICE_LIST)
  if (!data || !Array.isArray(data) || data.length === 0) return null
  return data as ServicePage[]
}

export async function fetchServiceSlugs(): Promise<string[] | null> {
  const data = await safeFetch<{slug: string}[]>(SERVICE_SLUGS)
  if (!data) return null
  return data.map((d) => d.slug)
}

export async function fetchServiceBySlug(slug: string): Promise<ServicePage | null> {
  const data = await safeFetch<ServicePage>(SERVICE_BY_SLUG, {slug})
  return data
}

// HIRE
const HIRE_LIST = groq`*[_type == "hire"]|order(date desc){
  "slug": slug.current,
  title,
  excerpt,
  "date": coalesce(date, _createdAt),
  category,
  readTime,
  image,
  ogImage,
  keywords,
  skills,
  content[]{ heading, paragraphs },
  faqs[]{ question, answer },
  caseStudy{ title, summary, results, date, image }
}`

const HIRE_SLUGS = groq`*[_type == "hire" && defined(slug.current)]{ "slug": slug.current }`

const HIRE_BY_SLUG = groq`*[_type == "hire" && slug.current == $slug][0]{
  "slug": slug.current,
  title,
  excerpt,
  "date": coalesce(date, _createdAt),
  category,
  readTime,
  image,
  ogImage,
  keywords,
  skills,
  content[]{ heading, paragraphs },
  faqs[]{ question, answer },
  caseStudy{ title, summary, results, date, image }
}`

export async function fetchHires(): Promise<HirePage[] | null> {
  const data = await safeFetch<any[]>(HIRE_LIST)
  if (!data || !Array.isArray(data) || data.length === 0) return null
  return data as HirePage[]
}

export async function fetchHireSlugs(): Promise<string[] | null> {
  const data = await safeFetch<{slug: string}[]>(HIRE_SLUGS)
  if (!data) return null
  return data.map((d) => d.slug)
}

export async function fetchHireBySlug(slug: string): Promise<HirePage | null> {
  const data = await safeFetch<HirePage>(HIRE_BY_SLUG, {slug})
  return data
}
