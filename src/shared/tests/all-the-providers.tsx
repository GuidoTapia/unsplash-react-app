import { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'

interface AllTheProvidersProps {
  children?: ReactElement
}

export const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  return <BrowserRouter>{children}</BrowserRouter>
}
