import React, { MouseEventHandler } from 'react'
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
  const onClickTag: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    onClick && onClick()
  }

  return (
    <button type="button" className={['tag', `tag--${variant}`].join(' ')} onClick={onClickTag} {...props}>
      {name}
    </button>
  )
}
