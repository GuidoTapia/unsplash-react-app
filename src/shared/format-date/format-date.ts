const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
} as const

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', options)
}
