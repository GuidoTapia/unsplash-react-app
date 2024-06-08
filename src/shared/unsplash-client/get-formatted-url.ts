export function getFormattedUrl(baseUrl: string, params: Record<string, string | number>) {
  const esc = encodeURIComponent

  return `${baseUrl}?${Object.keys(params)
    .map((k) => esc(k) + '=' + esc(params[k]))
    .join('&')}`
}
