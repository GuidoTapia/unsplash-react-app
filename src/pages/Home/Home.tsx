import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { UnsplashApi } from '../../shared/unsplash-client'
import { Loader } from '../../ui/Loader/Loader'
import { PostsList } from '../../ui/PostsList'
import './home.css'
import { SearchBar } from '../../ui/SearchBar'

export const Home = () => {
  const [search, setSearch] = useState<string>()

  const { data: trendingData, isLoading: trendingIsLoading } = useQuery({
    queryKey: ['random'],
    queryFn: UnsplashApi.getRandomPhotos,
  })

  const { data: searchData, isLoading: searchIsLoading } = useQuery({
    queryKey: ['search', search],
    queryFn: async () => (search ? UnsplashApi.getBySearchTerm(search) : null),
  })

  const onClickSearch = (searchValue: string) => {
    setSearch(searchValue)
  }

  return (
    <div className="home">
      <h2>Search Photos:</h2>
      <SearchBar onClickSearch={onClickSearch} />
      {search ? <h2>Results for: {search}</h2> : <h2>Trending Photos Right Now</h2>}

      {search && searchData?.results ? <PostsList posts={searchData.results} /> : null}
      {!search && trendingData ? <PostsList posts={trendingData} /> : null}

      {(search && searchIsLoading) || (!search && trendingIsLoading) ? <Loader /> : null}
    </div>
  )
}
