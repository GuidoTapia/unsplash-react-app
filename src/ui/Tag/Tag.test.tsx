import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Tag } from './Tag'

const onClick = jest.fn()

const TagName = 'Example Tag'

test('Tag component example test', async () => {
  render(<Tag name={TagName} data-testid="test-tag" onClick={onClick} />)

  const tag = screen.getByTestId('test-tag')

  expect(tag).toHaveTextContent(TagName)

  await userEvent.click(tag)
})
