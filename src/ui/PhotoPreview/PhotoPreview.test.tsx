import { render, screen } from '@testing-library/react'
import { fireEvent } from '@storybook/test'
import '@testing-library/jest-dom'
import { AllTheProviders } from '../../shared/tests'
import { mockPosts } from '../../shared/mock-data/posts'
import { formatDate } from '../../shared/format-date'
import { PhotoPreview } from './PhotoPreview'

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

test('PhotoPreview component render optimal case', async () => {
  const post = mockPosts[Math.floor(Math.random() * 10)]
  const tags = Object.keys(post.topic_submissions)
    .slice(0, 3)
    .map((value) => `test-${value}`)

  render(
    <AllTheProviders>
      <PhotoPreview post={post} />
    </AllTheProviders>,
  )

  const container = screen.getByTestId('photo-preview-container')

  expect(container).toBeInTheDocument()

  fireEvent.mouseOver(container)

  expect(screen.getByTestId('photo-src')).toHaveAttribute('src', post.urls.regular)

  expect(screen.queryAllByText(`${post.user.name}`)).toHaveLength(1)
  expect(screen.queryAllByText(`Taken on ${formatDate(post.created_at)}`)).toHaveLength(1)

  expect(screen.queryAllByRole('button')).toHaveLength(3)
  tags.forEach((tag, index) => {
    expect(screen.getByTestId(`tag-${index}`)).toHaveTextContent(tag)
  })
})

test('PhotoPreview tags excess', async () => {
  const post = mockPosts[Math.floor(Math.random() * 10)]
  const tags = Array.from(Array(10).keys()).map((value) => `test-${value}`)
  const topicSubmissions = Object.fromEntries(
    tags.map((value) => [
      value,
      {
        status: 'approved',
        approved_on: '2024-06-02T15:23:32Z',
      },
    ]),
  )

  render(
    <AllTheProviders>
      <PhotoPreview post={{ ...post, topic_submissions: topicSubmissions }} />
    </AllTheProviders>,
  )

  fireEvent.mouseEnter(screen.getByTestId('photo-preview-aspect-ratio'))

  expect(screen.queryAllByRole('button')).toHaveLength(3)

  tags.slice(0, 3).forEach((tag, index) => {
    expect(screen.getByTestId(`tag-${index}`)).toHaveTextContent(tag)
  })
  tags.slice(3).forEach((tag, index) => {
    expect(screen.queryByTestId(`tag-${index + 3}`)).not.toBeInTheDocument()
    expect(screen.queryByText(tag)).not.toBeInTheDocument()
  })
})
