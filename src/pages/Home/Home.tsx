import { useQuery } from '@tanstack/react-query'
import { UnsplashApi } from '../../shared/unsplash-client'
import { Loader } from '../../ui/Loader/Loader'
import { PostsList } from './PostsList'
import './home.css'

export const Home = () => {
  const { data, isLoading } = useQuery({ queryKey: ['random'], queryFn: UnsplashApi.getRandomPhotos })

  return (
    <div className="home">
      <h2>Trending Photos Right Now</h2>
      {data ? <PostsList posts={data} /> : null}
      {isLoading ? <Loader /> : null}
    </div>
  )
}
