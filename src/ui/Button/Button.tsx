import React from 'react'
import './button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Variant to differenciate between main and secondary events
   */
  variant?: 'primary' | 'secondary'
  /**
   * Predefined sizes using clothing 2-letter system ("sm" | "md" | "lg")
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Button contents
   */
  label: string
}

export const Button = ({ variant = 'primary', size = 'md', label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={['custom-button', `custom-button--${size}`, `custom-button--${variant}`].join(' ')}
      {...props}
    >
      {label}
    </button>
  )
}
