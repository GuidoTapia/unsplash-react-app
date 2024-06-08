import { IconLoader } from '@tabler/icons-react'
import './loader.css'

type LoaderSize = 'sm' | 'md' | 'lg'

const loaderSize = {
  sm: 16,
  md: 24,
  lg: 32,
}

interface LoaderProps {
  size?: LoaderSize
}

export const Loader = ({ size = 'md' }: LoaderProps) => {
  return (
    <div className="loader-container" id="loader">
      <div className="loader">
        <IconLoader size={loaderSize[size]} color="white" />
      </div>
    </div>
  )
}
