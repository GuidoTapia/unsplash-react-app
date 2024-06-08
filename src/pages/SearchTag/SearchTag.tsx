import { useQuery } from '@tanstack/react-query'
import { IconArrowLeft } from '@tabler/icons-react'
import { useNavigate, useParams } from 'react-router-dom'
import { UnsplashApi } from '../../shared/unsplash-client'
import { Loader } from '../../ui/Loader/Loader'
import { PostsList } from '../../ui/PostsList'
import './search-tag.css'
import { Tag } from '../../ui/Tag'
import { ActionIcon } from '../../ui/ActionIcon'

export const SearchTag = () => {
  const { tag } = useParams()
  const navigate = useNavigate()

  const { data, isLoading } = useQuery({
    queryKey: ['tag', tag],
    queryFn: async () => (tag ? UnsplashApi.getByTag(tag) : null),
  })

  const onGoBack = () => {
    navigate(-1)
  }

  return (
    <div className="search-tag">
      <div className="search-container">
        <ActionIcon Icon={IconArrowLeft} onClick={onGoBack} />
        <h2>Search by:</h2>
        {tag ? <Tag name={tag} variant="dark" /> : null}
      </div>
      {data?.results ? <PostsList posts={data.results} /> : null}
      {isLoading ? <Loader /> : null}
    </div>
  )
}
