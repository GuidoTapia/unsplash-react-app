import { fn } from '@storybook/test'
import { mockPosts } from '../../shared/mock-data/posts'
import { PhotoPreview } from './PhotoPreview'

export default {
  title: 'Example/PhotoPreview',
  component: PhotoPreview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    post: mockPosts[0],
  },
  args: { onClick: fn() },
}

export const Primary = {
  args: {
    post: mockPosts[0],
  },
}
