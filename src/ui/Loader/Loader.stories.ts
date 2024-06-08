import { Loader } from './Loader'

export default {
  title: 'Example/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: 'md',
  },
}

export const Small = {
  args: {
    size: 'sm',
  },
}

export const Medium = {
  args: {
    size: 'md',
  },
}

export const Large = {
  args: {
    size: 'lg',
  },
}
