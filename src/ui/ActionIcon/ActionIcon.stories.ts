import { fn } from '@storybook/test'
import { IconTestPipe } from '@tabler/icons-react'
import { ActionIcon } from './ActionIcon'

export default {
  title: 'Example/ActionIcon',
  component: ActionIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: 'light',
    size: 'md',
    Icon: IconTestPipe,
  },
  args: { onClick: fn() },
}

export const Small = {
  args: {
    variant: 'light',
    size: 'sm',
    Icon: IconTestPipe,
  },
}

export const Medium = {
  args: {
    variant: 'light',
    size: 'md',
    Icon: IconTestPipe,
  },
}

export const Large = {
  args: {
    variant: 'light',
    size: 'lg',
    Icon: IconTestPipe,
  },
}
