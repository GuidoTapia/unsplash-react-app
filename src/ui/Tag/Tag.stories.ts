import { fn } from '@storybook/test'
import { Tag } from './Tag'

export default {
  title: 'Example/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: 'Tag',
  },
  args: { onClick: fn() },
}

export const Primary = {
  args: {
    name: 'Tag',
  },
}
