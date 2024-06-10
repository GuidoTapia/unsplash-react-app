import { useRef } from 'react'
import { Flex, Skeleton } from '@mantine/core'
import { Post } from '../../shared/types/post'
import { PhotoPreview } from '../PhotoPreview'

const splitPosts = (posts: Post[], columns: 1 | 2 | 3 | 4 | 5 = 3, columnWidth: number = 100) => {
  const columnHeights = Array.from({ length: columns }, () => 0)
  const postsLists: Post[][] = Array.from({ length: columns }, () => [])
  posts.forEach((post) => {
    const minHeigth = Math.min(...columnHeights)
    const minHeigthIndex = columnHeights.findIndex((height) => height === minHeigth)
    postsLists[minHeigthIndex].push(post)
    columnHeights[minHeigthIndex] += Math.round((columnWidth * post.height) / post.width) + (columnWidth != 1 ? 16 : 0)
  })
  return { postsLists, columnHeights }
}

interface PostsListProps {
  posts: Post[]
  columns?: 1 | 2 | 3 | 4 | 5
  isLoading?: boolean
}

export const PostsList = ({ posts, isLoading, columns = 3 }: PostsListProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const columnWidth = containerRef.current?.clientWidth ? containerRef.current?.clientWidth / columns : undefined

  const { postsLists, columnHeights } = splitPosts(posts, columns, columnWidth)

  const getSkeletonHeight = (columnIndex: number) => {
    const maxHeigth = Math.max(...columnHeights)
    return Math.max(200 + (maxHeigth - columnHeights[columnIndex]) / 2, 300) + Math.random() * 200
  }

  return (
    <Flex gap="md" w="100%" ref={containerRef}>
      {postsLists.map((postList, listIndex) => (
        <Flex gap="md" w="100%" direction="column" key={listIndex}>
          {postList.map((post, postIndex) => (
            <PhotoPreview post={post} key={`post-${postIndex}`} />
          ))}
          {isLoading ? (
            <>
              <Skeleton h={getSkeletonHeight(listIndex)} key={'skeleton-0'} />
              <Skeleton h={getSkeletonHeight(listIndex)} key={'skeleton-1'} />
            </>
          ) : null}
        </Flex>
      ))}
    </Flex>
  )
}
