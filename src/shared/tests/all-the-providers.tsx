import { MantineProvider } from '@mantine/core'
import { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { mantineTheme } from '../../ui/theme'

interface AllTheProvidersProps {
  children?: ReactElement
}

export const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  return (
    <BrowserRouter>
      <MantineProvider theme={mantineTheme}>{children}</MantineProvider>
    </BrowserRouter>
  )
}
