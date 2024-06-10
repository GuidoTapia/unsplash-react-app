import { MouseEventHandler } from 'react'
import { useNavigate } from 'react-router-dom'
import { ActionIcon, Avatar, Flex, Text, Tooltip, Transition } from '@mantine/core'
import { IconBrandUnsplash } from '@tabler/icons-react'
import { Tag } from '../../Tag'
import './photo-preview-footer.css'
import { formatDate } from '../../../shared/format-date'

interface PhotoPreviewOverlayProps {
  author: string
  authorProfileImage?: string | null
  date: Date
  tags: string[]
  hovered?: boolean
  unsplashLink?: string
}

export const PhotoPreviewOverlay = ({
  author,
  authorProfileImage,
  date,
  tags,
  hovered,
  unsplashLink,
}: PhotoPreviewOverlayProps) => {
  const navigate = useNavigate()

  const onClickTag = (tag: string) => {
    navigate(`/tag/${tag}`)
  }
  const redirectUnsplash: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    window.open(unsplashLink, '_blank', 'rel=noopener noreferrer')
  }

  return (
    <Transition mounted={hovered ?? false} transition="fade" duration={500} timingFunction="ease">
      {(style) => (
        <Flex
          direction="column"
          justify="space-between"
          pos="absolute"
          className="overlay-container"
          data-testid="photo-preview-footer-container"
          id="photo-preview-footer-container"
          p="md"
          style={style}
        >
          <Flex direction="row" gap="md">
            {tags.slice(0, 3).map((tag, index) => (
              <Tag
                name={tag}
                data-testid={`tag-${index}`}
                key={`tag-${index}`}
                id={`tag-${index}`}
                onClick={() => onClickTag(tag)}
              />
            ))}
          </Flex>
          <Flex direction="row" align="center" justify="space-between">
            <Flex direction="row" align="center" gap="md">
              <Avatar src={authorProfileImage} />
              <Flex direction="column" align="start" gap="xs">
                <Text data-testid="photo-preview-author" id="photo-preview-author" c="gray.0" size="sm">
                  by <b>{author}</b>
                </Text>

                <Text data-testid="photo-preview-date" id="photo-preview-date" c="gray.0" size="sm">
                  Taken on {formatDate(date)}
                </Text>
              </Flex>
            </Flex>
            {unsplashLink ? (
              <Tooltip label="Open Unsplash Original Post" position="bottom">
                <ActionIcon variant="outline" size="lg" onClick={redirectUnsplash}>
                  <IconBrandUnsplash size={18} />
                </ActionIcon>
              </Tooltip>
            ) : null}
          </Flex>
        </Flex>
      )}
    </Transition>
  )
}
