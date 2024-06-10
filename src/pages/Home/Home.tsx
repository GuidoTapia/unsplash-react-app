import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button, Flex } from '@mantine/core'
import { useInfiniteQuery } from '@tanstack/react-query'
import { UnsplashApi } from '../../shared/unsplash-client'
import { PostsList } from '../../ui/PostsList'
import { SearchBar } from '../../ui/SearchBar'

const maxInfiniteLoads = import.meta.env.VITE_PHOTO_QUERIES_MAX_INFINITE_LOADS

export const Home = () => {
  const [searchParams] = useSearchParams()

  const search = searchParams.get('search')
  const {
    data: trendingData,
    isFetching: trendingIsFetching,
    fetchNextPage: trendingFetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['random'],
    queryFn: async ({ pageParam }) => UnsplashApi.getRandomPhotos({ page: pageParam }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
    refetchOnWindowFocus: false,
  })

  const {
    data: searchData,
    isFetching: searchIsFetching,
    fetchNextPage: searchFetchNextPage,
  } = useInfiniteQuery({
    enabled: Boolean(search && search.length),
    queryKey: ['search', search],
    queryFn: async ({ pageParam }) => UnsplashApi.getBySearchTerm({ searchTerm: search ?? '', page: pageParam }),
    getNextPageParam: (lastPage) => lastPage?.nextPage,
    initialPageParam: 1,
    refetchOnWindowFocus: false,
  })

  const trendingPosts = trendingData?.pages.flatMap((page) => page.results)
  const searchPosts = searchData?.pages.flatMap((page) => page.results)

  const onClickLoadMore = () => {
    if (search) {
      searchFetchNextPage()
    } else {
      trendingFetchNextPage()
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight
      const scrollHeight = window.document.body.scrollHeight - screenHeight
      const position = window.scrollY

      if (scrollHeight - position < screenHeight) {
        if (
          !search &&
          trendingData?.pages.length &&
          trendingData.pages.length < maxInfiniteLoads &&
          !trendingIsFetching
        ) {
          trendingFetchNextPage()
        }
        if (search && searchData?.pages.length && searchData?.pages.length < maxInfiniteLoads && !searchIsFetching) {
          searchFetchNextPage()
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [trendingData?.pages.length, searchData?.pages.length, searchIsFetching, trendingIsFetching])

  return (
    <Flex direction="column" gap="md">
      <SearchBar />
      {search ? <h2>Results for: {search}</h2> : <h2>Trending Photos Right Now</h2>}

      {search && searchPosts ? <PostsList posts={searchPosts} isLoading={searchIsFetching} /> : null}
      {!search && trendingPosts ? <PostsList posts={trendingPosts} isLoading={trendingIsFetching} /> : null}

      {!searchIsFetching && !trendingIsFetching ? (
        <Flex w="100%" justify="center">
          <Button w="33%" size="xl" variant="outline" onClick={onClickLoadMore}>
            Load More
          </Button>
        </Flex>
      ) : null}
    </Flex>
  )
}
