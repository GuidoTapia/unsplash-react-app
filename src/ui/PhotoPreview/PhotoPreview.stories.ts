import { fn } from '@storybook/test'
import { PhotoPreview } from './PhotoPreview'

export default {
  title: 'Example/PhotoPreview',
  component: PhotoPreview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    author: 'Anonymous',
    date: new Date('May 5, 2020'),
    tags: ['tag 1', 'tag 2', 'tag 3'],
    src: 'https://images.unsplash.com/photo-1717457779557-44f53661aa15?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  args: { onClick: fn() },
}

export const Primary = {
  args: {
    author: 'Anonymous',
    date: new Date('May 5, 2020'),
    tags: ['tag 1', 'tag 2', 'tag 3'],
    src: 'https://images.unsplash.com/photo-1717457779557-44f53661aa15?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
}
