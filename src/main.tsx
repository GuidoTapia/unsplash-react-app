import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Home } from './pages/Home'
import { Layout } from './ui/Layout'
import { SearchTag } from './pages/SearchTag'
import './index.css'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: 'tag/:tag',
    element: <SearchTag />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </QueryClientProvider>
  </React.StrictMode>,
)
