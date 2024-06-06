import { fn } from '@storybook/test'
import { Button } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: 'secondary',
    size: 'md',
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
}

export const Secondary = {
  args: {
    variant: 'secondary',
    label: 'Button',
  },
}

export const Large = {
  args: {
    size: 'lg',
    label: 'Button',
  },
}

export const Small = {
  args: {
    size: 'sm',
    label: 'Button',
  },
}
