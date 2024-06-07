import React from 'react'
import './tag.css'

interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Tag content
   */
  name: string
  onClick?: () => void
}

export const Tag = ({ name, onClick, ...props }: TagProps) => {
  return (
    <button type="button" className={['tag'].join(' ')} onClick={onClick} {...props}>
      {name}
    </button>
  )
}
