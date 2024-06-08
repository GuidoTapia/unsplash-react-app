import { fn } from '@storybook/test'
import { Button } from './Button'

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
  args: { onClick: fn() },
}

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
