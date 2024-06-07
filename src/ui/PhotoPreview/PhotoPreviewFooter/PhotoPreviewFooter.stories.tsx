import { ReactNode } from 'react'
import { fn } from '@storybook/test'
import { PhotoPreviewFooter } from './PhotoPreviewFooter'

export default {
  title: 'Example/PhotoPreviewFooter',
  component: PhotoPreviewFooter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    author: 'Anonymous',
    date: 'May 5, 2020',
    tags: ['tag 1', 'tag 2', 'tag 3'],
  },
  args: { onClick: fn() },
  decorators: [(story: () => ReactNode) => <div style={{ width: '400px', height: '80px' }}>{story()}</div>],
}

export const Primary = {
  args: {
    author: 'Anonymous',
    date: 'May 5, 2020',
    tags: ['tag 1', 'tag 2', 'tag 3'],
  },
}
