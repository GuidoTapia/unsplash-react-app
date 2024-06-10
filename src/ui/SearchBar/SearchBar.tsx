import { ChangeEvent, FormEventHandler, useEffect, useState } from 'react'
import { Input, useMantineTheme } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import './search-bar.css'
import { Button } from '../Button'

interface SearchBarProps {
  showButton?: boolean
}

export const SearchBar = ({ showButton }: SearchBarProps) => {
  const [value, setValue] = useState<string>('')

  const [searchParams, setSearchParams] = useSearchParams()

  const navigate = useNavigate()

  const theme = useMantineTheme()

  const onChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value ?? '')
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    navigate('/')
    event.preventDefault()
    setSearchParams({ search: value })
  }
  useEffect(() => {
    setValue(searchParams.get('search') ?? '')
  }, [searchParams])

  return (
    <form onSubmit={onSubmit} className="input">
      <div className="search-bar-container" data-testid="search-bar" id="search-bar">
        <Input
          name="search"
          onChange={onChangeSearchInput}
          value={value}
          id="search-bar-input"
          data-testid="search-bar-input"
          placeholder="Search"
          w="100%"
          leftSection={<IconSearch size={16} color={theme.colors.gray[5]} />}
        />
        {showButton ? <Button label="Search" type="submit" /> : null}
      </div>
    </form>
  )
}
