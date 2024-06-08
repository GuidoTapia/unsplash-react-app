import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { AllTheProviders } from '../../shared/tests'
import { PhotoPreview } from './PhotoPreview'

const author = 'Test Author'
const date = 'June 6, 2024'
const srcImg =
  'https://images.unsplash.com/photo-1717457779557-44f53661aa15?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

test('PhotoPreview component render optimal case', async () => {
  const tags = Array.from(Array(3).keys()).map((value) => `test-${value}`)

  render(
    <AllTheProviders>
      <PhotoPreview author={author} date={date} tags={tags} src={srcImg} />
    </AllTheProviders>,
  )

  expect(screen.getByTestId('photo-preview-container')).toBeInTheDocument()

  expect(screen.getByTestId('photo-src')).toHaveAttribute('src', srcImg)

  expect(screen.queryAllByText(`${author}`)).toHaveLength(1)
  expect(screen.queryAllByText(`Taken ${date}`)).toHaveLength(1)

  expect(screen.queryAllByRole('button')).toHaveLength(3)
  tags.forEach((tag, index) => {
    expect(screen.getByTestId(`tag-${index}`)).toHaveTextContent(tag)
  })
})

test('PhotoPreview tags excess', async () => {
  const tags = Array.from(Array(10).keys()).map((value) => `test-${value}`)

  render(
    <AllTheProviders>
      <PhotoPreview author={author} date={date} tags={tags} src={srcImg} />
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
