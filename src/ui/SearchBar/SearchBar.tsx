import React, { ChangeEvent, useState } from 'react'
import './search-bar.css'
import { Button } from '../Button'

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClickSearch?: (value: string) => void
}

export const SearchBar = ({ onClickSearch, ...props }: SearchBarProps) => {
  const [value, setValue] = useState<string>('')

  const onChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value ?? '')
  }
  const onClickSearchButton = () => {
    onClickSearch && onClickSearch(value)
  }

  return (
    <div className="search-bar-container" data-testid="search-bar" id="search-bar">
      <input
        className="search-bar"
        onChange={onChangeSearchInput}
        value={value}
        {...props}
        id="search-bar-input"
        data-testid="search-bar-input"
      />
      <Button label="Search" onClick={onClickSearchButton} />
    </div>
  )
}
