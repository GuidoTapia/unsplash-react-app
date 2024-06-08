import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Home } from '../pages/Home'
import { Layout } from '../ui/Layout'
import './App.css'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Home />
      </Layout>
    </QueryClientProvider>
  )
}
