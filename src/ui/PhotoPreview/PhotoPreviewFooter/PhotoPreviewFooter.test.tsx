import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PhotoPreviewFooter } from './PhotoPreviewFooter'

const author = 'Test Author'
const date = 'June 6, 2024'

test('PhotoPreviewFooter component render optimal case', async () => {
  const tags = Array.from(Array(3).keys()).map((value) => `test-${value}`)

  render(<PhotoPreviewFooter author={author} date={date} tags={tags} />)

  expect(screen.getByTestId('photo-preview-footer-container')).toBeInTheDocument()

  expect(screen.queryAllByText(`${author}`)).toHaveLength(1)
  expect(screen.queryAllByText(`Taken ${date}`)).toHaveLength(1)

  expect(screen.queryAllByRole('button')).toHaveLength(3)
  tags.forEach((tag, index) => {
    expect(screen.getByTestId(`tag-${index}`)).toHaveTextContent(tag)
  })
})

test('PhotoPreviewFooter tags excess', async () => {
  const tags = Array.from(Array(10).keys()).map((value) => `test-${value}`)

  render(<PhotoPreviewFooter author={author} date={date} tags={tags} />)

  expect(screen.queryAllByRole('button')).toHaveLength(3)

  tags.slice(0, 3).forEach((tag, index) => {
    expect(screen.getByTestId(`tag-${index}`)).toHaveTextContent(tag)
  })
  tags.slice(3).forEach((tag, index) => {
    expect(screen.queryByTestId(`tag-${index + 3}`)).not.toBeInTheDocument()
    expect(screen.queryByText(tag)).not.toBeInTheDocument()
  })
})
