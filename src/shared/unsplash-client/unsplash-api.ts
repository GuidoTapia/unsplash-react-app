/* 
  Automated tests were not cosidered for API in this case to avoid reaching the 50 queries limit per hour
  As Unsplash is a very popular API wich status we can check on their website, tests are ignored for now
*/

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
}

function getQueryString(params: Record<string, string | number>) {
  const esc = encodeURIComponent

  return Object.keys(params)
    .map((k) => esc(k) + '=' + esc(params[k]))
    .join('&')
}

const unsplashApiUrl = import.meta.env.VITE_UNSPLASH_API_URL

async function getPhotos(params: Record<string, string | number>) {
  const url = `${unsplashApiUrl}/photos?${getQueryString(params)}`
  const response = await fetch(url, {
    method: 'GET',
    headers,
  })

  return response.json()
}

async function getRandomPhotos() {
  const url = `${unsplashApiUrl}/photos/random?${getQueryString({ count: 20 })}`
  const response = await fetch(url, {
    method: 'GET',
    headers,
  })

  return response.json()
}

export const UnsplashApi = { getPhotos, getRandomPhotos }
