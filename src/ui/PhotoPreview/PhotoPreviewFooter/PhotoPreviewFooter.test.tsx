import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { AllTheProviders } from '../../../shared/tests'
import { PhotoPreviewFooter } from './PhotoPreviewFooter'

const author = 'Test Author'
const dateString = 'June 6, 2024'
const date = new Date(dateString)

test('PhotoPreviewFooter component render optimal case', async () => {
  const tags = Array.from(Array(3).keys()).map((value) => `test-${value}`)

  render(
    <AllTheProviders>
      <PhotoPreviewFooter author={author} date={date} tags={tags} />
    </AllTheProviders>,
  )

  expect(screen.getByTestId('photo-preview-footer-container')).toBeInTheDocument()

  expect(screen.queryAllByText(`${author}`)).toHaveLength(1)
  expect(screen.queryAllByText(`Taken on ${dateString}`)).toHaveLength(1)

  expect(screen.queryAllByRole('button')).toHaveLength(3)
  tags.forEach((tag, index) => {
    expect(screen.getByTestId(`tag-${index}`)).toHaveTextContent(tag)
  })
})

test('PhotoPreviewFooter tags excess', async () => {
  const tags = Array.from(Array(10).keys()).map((value) => `test-${value}`)

  render(
    <AllTheProviders>
      <PhotoPreviewFooter author={author} date={date} tags={tags} />
    </AllTheProviders>,
  )

  expect(screen.queryAllByRole('button')).toHaveLength(3)

  tags.slice(0, 3).forEach((tag, index) => {
    expect(screen.getByTestId(`tag-${index}`)).toHaveTextContent(tag)
  })
  tags.slice(3).forEach((tag, index) => {
    expect(screen.queryByTestId(`tag-${index + 3}`)).not.toBeInTheDocument()
    expect(screen.queryByText(tag)).not.toBeInTheDocument()
  })
})
