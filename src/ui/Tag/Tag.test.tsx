import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Tag } from './Tag'

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
})

test('Tag component example test', async () => {
  const onClick = jest.fn()
  const TagName = 'Example Tag'

  render(<Tag name={TagName} data-testid="test-tag" onClick={onClick} />)

  const tag = screen.getByTestId('test-tag')

  expect(tag).toHaveTextContent(TagName)

  await userEvent.click(tag)
})
