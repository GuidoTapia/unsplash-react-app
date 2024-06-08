import { fireEvent, render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SearchBar } from './SearchBar'

const onClickSearch = jest.fn()

const testSearch = 'Example Search'

test('Tag component example test', async () => {
  render(<SearchBar onClickSearch={onClickSearch} />)

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
