/* 
  Automated tests were not cosidered for API in this case to avoid reaching the 50 queries limit per hour
  As Unsplash is a very popular API wich status we can check on their website, tests are ignored for now
*/
import { Post } from '../types/post'
import { QueryReturnPost } from '../types/query-return-post'
import { headers } from './headers'
import { getFormattedUrl } from './get-formatted-url'
import { formatPost } from './format-post'

const unsplashApiUrl = import.meta.env.VITE_UNSPLASH_API_URL
const pageSize = import.meta.env.VITE_PHOTO_QUERIES_PAGE_SIZE

async function getPhotos(params: Record<string, string | number>) {
  const url = getFormattedUrl(`${unsplashApiUrl}/photos`, params)
  const response = await fetch(url, {
    method: 'GET',
    headers,
  })

  return response.json()
}

async function getRandomPhotos({ page }: { page: number }): Promise<{ results: Post[]; nextPage: number }> {
  const url = getFormattedUrl(`${unsplashApiUrl}/photos/random`, { count: pageSize })
  const response = await fetch(url, {
    method: 'GET',
    headers,
  })

  const responseJson = await response.json()

  return { results: responseJson.map((post: QueryReturnPost) => formatPost(post)), nextPage: page + 1 }
}

async function getByTag(tag: string): Promise<{ results: Post[]; total: number; total_pages: number }> {
  const url = getFormattedUrl(`${unsplashApiUrl}/search/photos`, { query: tag, per_page: pageSize })
  const response = await fetch(url, {
    method: 'GET',
    headers,
  })

  const responseJson = await response.json()

  return {
    total: responseJson.total as number,
    total_pages: responseJson.total_pages as number,
    results: responseJson.results.map((post: QueryReturnPost) => formatPost(post)),
  }
}

async function getBySearchTerm({
  searchTerm,
  page,
}: {
  searchTerm: string
  page: number
}): Promise<{ results: Post[]; total: number; totalPages: number; nextPage: number }> {
  const url = getFormattedUrl(`${unsplashApiUrl}/search/photos`, { query: searchTerm, page, per_page: pageSize })
  const response = await fetch(url, {
    method: 'GET',
    headers,
  })

  const responseJson = await response.json()

  return {
    total: responseJson.total as number,
    totalPages: responseJson.total_pages as number,
    nextPage: page + 1,
    results: responseJson.results.map((post: QueryReturnPost) => formatPost(post)),
  }
}

export const UnsplashApi = { getPhotos, getRandomPhotos, getByTag, getBySearchTerm }
