import { ReactNode } from 'react'
import { Header } from './Header'
import './layout.css'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      <div className="content">{children}</div>
    </div>
  )
}
