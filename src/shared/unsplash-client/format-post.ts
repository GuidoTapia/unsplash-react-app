import { Post } from '../types/post'
import { QueryReturnPost } from '../types/query-return-post'

const dateFields = ['created_at', 'updated_at', 'promoted_at']

export function formatPost(post: QueryReturnPost): Post {
  return Object.fromEntries(
    Object.entries(post).map(([key, val]) => [key, dateFields.includes(key) ? new Date(val) : val]),
  ) as Post
}
