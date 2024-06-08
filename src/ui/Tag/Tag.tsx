import React from 'react'
import './tag.css'

type tagVariants = 'light' | 'dark'
interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Tag content
   */
  name: string
  onClick?: () => void
  variant?: tagVariants
}

export const Tag = ({ name, onClick, variant = 'light', ...props }: TagProps) => {
  return (
    <button type="button" className={['tag', `tag--${variant}`].join(' ')} onClick={onClick} {...props}>
      {name}
    </button>
  )
}
