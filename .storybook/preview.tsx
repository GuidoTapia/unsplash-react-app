import React from 'react'
import { AllTheProviders } from '../src/shared/tests'
import '../src/index.css'
/** @type { import('@storybook/react').Preview } */

const preview = {
  decorators: [
    (Story) => (
      <AllTheProviders>
        <Story />
      </AllTheProviders>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [
        {
          name: 'gray',
          value: '#888888',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
