import { fn } from '@storybook/test'
import { SearchBar } from './SearchBar'

export default {
  title: 'Example/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: 'SearchBar',
  },
  args: { onClickSearch: fn() },
}

export const Primary = {
  args: {
    placeholder: 'SearchBar',
  },
}
