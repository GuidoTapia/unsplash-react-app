import { render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import { mockPosts } from '../../shared/mock-data/posts'
import { AllTheProviders } from '../../shared/tests'
import { PostsList } from './PostsList'

test('PostsList render with mocked data', async () => {
  render(
    <AllTheProviders>
      <PostsList posts={mockPosts} />
    </AllTheProviders>,
  )

  expect(screen.getByTestId('posts-list-container')).toBeInTheDocument()

  const rendererPosts = screen.getAllByTestId('photo-preview-container')

  mockPosts.forEach((post, index) => {
    const renderPost = rendererPosts[index]

    expect(within(renderPost).getByTestId('photo-src')).toHaveAttribute('src', post.urls.regular)

    expect(within(renderPost).queryAllByText(`${post.user.name}`)).toHaveLength(1)
    expect(within(renderPost).queryAllByText(`Taken ${post.created_at}`)).toHaveLength(1)

    expect(within(renderPost).queryAllByRole('button').length).toBeLessThanOrEqual(3)

    Object.keys(post.topic_submissions)
      .slice(0, 3)
      .forEach((tag, index) => {
        expect(within(renderPost).getByTestId(`tag-${index}`)).toHaveTextContent(tag)
      })
  })
})

test('PostsList render with random data', async () => {
  const randomMock = Array.from(Array(Math.round(Math.random() * 50)).keys()).map(
    () => mockPosts[Math.round(Math.random() * 9)],
  )

  render(
    <AllTheProviders>
      <PostsList posts={randomMock} />
    </AllTheProviders>,
  )

  expect(screen.getByTestId('posts-list-container')).toBeInTheDocument()

  const rendererPosts = screen.getAllByTestId('photo-preview-container')

  randomMock.forEach((post, index) => {
    const renderPost = rendererPosts[index]

    expect(within(renderPost).getByTestId('photo-src')).toHaveAttribute('src', post.urls.regular)

    expect(within(renderPost).queryAllByText(`${post.user.name}`)).toHaveLength(1)
    expect(within(renderPost).queryAllByText(`Taken ${post.created_at}`)).toHaveLength(1)

    expect(within(renderPost).queryAllByRole('button').length).toBeLessThanOrEqual(3)

    Object.keys(post.topic_submissions)
      .slice(0, 3)
      .forEach((tag, index) => {
        expect(within(renderPost).getByTestId(`tag-${index}`)).toHaveTextContent(tag)
      })
  })
})
