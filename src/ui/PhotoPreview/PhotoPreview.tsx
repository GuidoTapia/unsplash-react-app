import { useState } from 'react'
import { AspectRatio, Box, Image } from '@mantine/core'
import { useHover } from '@mantine/hooks'
import { Post } from '../../shared/types/post'
import { PhotoModal } from '../PhotoModal'
import { PhotoPreviewOverlay } from './PhotoPreviewOverlay'
import './photo-preview.css'

interface PhotoPreviewProps {
  post: Post
}

export const PhotoPreview = ({ post }: PhotoPreviewProps) => {
  const { user, created_at, topic_submissions, urls, width, height, alt_description, links } = post

  const [isModalOpen, setIsModalOpen] = useState(false)

  const { hovered, ref } = useHover()

  const onCloseModal = () => setIsModalOpen(false)

  return (
    <>
      <Box
        onClick={() => setIsModalOpen(true)}
        data-testid="photo-preview-container"
        id="photo-preview-container"
        className="photo-preview-container"
      >
        <AspectRatio
          ratio={width && height ? width / height : 1}
          w={'100%'}
          mx="auto"
          pos="relative"
          ref={ref}
          m={0}
          data-testid="photo-preview-aspect-ratio"
          id="photo-preview-aspect-ratio"
        >
          <Image
            src={urls.regular}
            w="100%"
            data-testid="photo-src"
            id="photo-src"
            alt={alt_description ?? undefined}
            display="block"
            radius="sm"
          />
          <PhotoPreviewOverlay
            author={user.name}
            date={created_at}
            tags={Object.keys(topic_submissions)}
            hovered={hovered}
            authorProfileImage={user.profile_image.small}
            unsplashLink={links.html}
          />
        </AspectRatio>
      </Box>
      {isModalOpen ? <PhotoModal post={post} onClose={onCloseModal} /> : null}
    </>
  )
}
