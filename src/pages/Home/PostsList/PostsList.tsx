import { Post } from '../../../shared/types/post'
import { PhotoPreview } from '../../../ui/PhotoPreview'
import './posts-list.css'

interface PostsListProps {
  posts: Post[]
}

export const PostsList = ({ posts }: PostsListProps) => {
  return (
    <div className="posts-list" data-testid="posts-list-container" id="posts-list-container">
      {posts.map((post, index) => (
        <PhotoPreview
          author={post.user.name}
          date={post.created_at}
          tags={Object.keys(post.topic_submissions)}
          src={post.urls.regular}
          key={`${post.id}-${index}`}
        />
      ))}
    </div>
  )
}
