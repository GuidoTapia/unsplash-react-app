import { Box, Flex, Title } from '@mantine/core'
import { SearchBar } from '../../SearchBar'
import './header.css'

export const Header = () => {
  return (
    <header className="header">
      <Flex direction="row" gap="sm" align="center">
        <Title size="h2" c="gray.4">
          PHOTO<b>SEARCH</b>
        </Title>
        build using Unsplash API
      </Flex>
      <Box w={320}>
        <SearchBar />
      </Box>
    </header>
  )
}
