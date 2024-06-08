type Languages = 'en' | 'es' | string

export interface Post {
  id: string
  slug: string
  alternative_slugs: Record<Languages, string | null>
  created_at: string
  updated_at?: string | null
  promoted_at?: string | null
  width: number
  height: number
  color: string | null
  blur_hash: string | null
  description?: string | null
  alt_description?: string | null
  breadcrumbs: string[]
  urls: {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
    small_s3: string
  }
  links: {
    self: string
    html: string
    download: string
    download_location: string
  }
  likes?: number | null
  liked_by_user: boolean
  current_user_collections: string[]
  topic_submissions: Record<
    string,
    {
      status: string
      approved_on: string | null
    }
  >
  asset_type: string
  sponsorship: any // eslint-disable-line  @typescript-eslint/no-explicit-any
  user: {
    id: string
    updated_at: string
    username: string
    name: string
    first_name: string
    last_name: string | null
    twitter_username: string | null
    portfolio_url: string | null
    bio: string | null
    location: string | null
    links: {
      self: string | null
      html: string | null
      photos: string | null
      likes: string | null
      portfolio: string | null
      following: string | null
      followers: string | null
    }
    profile_image: {
      small: string | null
      medium: string | null
      large: string | null
    }
    instagram_username: string | null
    total_collections: number
    total_likes: number
    total_photos: number
    total_promoted_photos: number
    total_illustrations: number
    total_promoted_illustrations: number
    accepted_tos: boolean
    for_hire: boolean
    social: {
      instagram_username: string | null
      portfolio_url: string | null
      twitter_username: string | null
      paypal_email: string | null
    }
  }
}
