/* 
  Automated tests were not cosidered for API in this case to avoid reaching the 50 queries limit per hour
  As Unsplash is a very popular API wich status we can check on their website, tests are ignored for now
*/
import { headers } from './headers'
import { getFormattedUrl } from './get-formatted-url'

const unsplashApiUrl = import.meta.env.VITE_UNSPLASH_API_URL

const RAMDOM_POST_SIZE = 30

async function getPhotos(params: Record<string, string | number>) {
  const url = getFormattedUrl(`${unsplashApiUrl}/photos`, params)
  const response = await fetch(url, {
    method: 'GET',
    headers,
  })

  return response.json()
}

async function getRandomPhotos() {
  const url = getFormattedUrl(`${unsplashApiUrl}/photos/random`, { count: RAMDOM_POST_SIZE })
  const response = await fetch(url, {
    method: 'GET',
    headers,
  })

  return response.json()
}

export const UnsplashApi = { getPhotos, getRandomPhotos }
