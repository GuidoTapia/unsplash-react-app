import { useState } from 'react'
import { Avatar, Flex, Image, Modal, Skeleton, Text } from '@mantine/core'
import { Link, useNavigate } from 'react-router-dom'
import { Post } from '../../shared/types/post'
import { Tag } from '../Tag'

interface PhotoModalProps {
  post: Post
  onClose: () => void
}

export const PhotoModal = ({ post, onClose }: PhotoModalProps) => {
  const { user, topic_submissions, urls, width, height, sponsorship } = post

  const [imageIsLoading, setImageIsLoading] = useState(true)

  const navigate = useNavigate()

  const onClickTag = (tag: string) => {
    navigate(`/tag/${tag}`)
  }

  return (
    <Modal
      opened={true}
      onClose={onClose}
      withCloseButton
      size="70%"
      centered
      title={
        <Flex direction="row" align="center" gap="md">
          <Avatar src={user.profile_image.small} />
          <Flex direction="column" align="start" gap="xs">
            <Text data-testid="photo-preview-author" id="photo-preview-author" c="dark" size="sm">
              by <b>{user.name}</b>
            </Text>

            <Text data-testid="photo-preview-date" id="photo-preview-date" c="dark" size="sm">
              {sponsorship?.tagline ?? ''}
            </Text>
          </Flex>
        </Flex>
      }
    >
      <Flex direction="column" gap="lg">
        <Flex align="center" justify="center" flex={1}>
          <Skeleton
            visible={imageIsLoading}
            w="auto"
            maw="100%"
            h="600px"
            style={{
              aspectRatio: width && height ? width / height : 1,
            }}
          >
            <Link to={urls.full} target="_blank" rel="noopener noreferrer" style={{ cursor: 'zoom-in' }}>
              <Image
                src={urls.full}
                w="auto"
                maw="100%"
                mah="600px"
                fit="contain"
                style={{
                  aspectRatio: width && height ? width / height : 1,
                }}
                flex={1}
                onLoad={() => setImageIsLoading(false)}
                radius="sm"
              />
            </Link>
          </Skeleton>
        </Flex>
        <Flex direction="row" gap="md">
          {Object.keys(topic_submissions).map((tag, index) => (
            <Tag
              variant="dark"
              name={tag}
              data-testid={`tag-${index}`}
              key={`tag-${index}`}
              id={`tag-${index}`}
              onClick={() => onClickTag(tag)}
            />
          ))}
        </Flex>
      </Flex>
    </Modal>
  )
}
