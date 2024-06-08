import React from 'react'
import './action-icon.css'
import { Icon as TablerIcon } from '@tabler/icons-react'

const iconSize = {
  sm: 12,
  md: 16,
  lg: 20,
}

interface ActionIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'light' | 'dark'
  Icon: TablerIcon
}

export const ActionIcon = ({ Icon, size = 'md', variant = 'dark', ...props }: ActionIconProps) => {
  return (
    <button
      type="button"
      className={['action-icon', `action-icon--${size}`, `action-icon--${variant}`].join(' ')}
      {...props}
    >
      {Icon ? <Icon size={iconSize[size]} /> : null}
    </button>
  )
}
