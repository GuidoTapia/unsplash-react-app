import { fireEvent, render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import { AllTheProviders } from '../../shared/tests'
import { SearchBar } from './SearchBar'

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
  const onClickSearch = jest.fn()
  const testSearch = 'Example Search'

  render(
    <AllTheProviders>
      <SearchBar showButton />
    </AllTheProviders>,
  )

  const searchBar = screen.getByTestId('search-bar')
  const searchInput = within(searchBar).getByTestId('search-bar-input')
  const searchButton = within(searchBar).getByRole('button')

  expect(searchInput).toBeInTheDocument()
  expect(searchButton).toBeInTheDocument()

  fireEvent.change(searchInput, { target: { value: testSearch } })
  expect(searchInput).toHaveValue(testSearch)

  fireEvent.click(searchButton)
  expect(onClickSearch).toHaveBeenCalledWith(testSearch)
})
