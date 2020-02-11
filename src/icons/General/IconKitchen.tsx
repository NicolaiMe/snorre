import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconKitchen: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M20,2.01 L4,2 L4,22 L20,22 L20,2.01 Z M18,20 L6,20 L6,10.98 L18,10.98 L18,20 Z M18,9 L6,9 L6,4 L18,4 L18,9 Z M8,5 L10,5 L10,8 L8,8 L8,5 Z M8,12 L10,12 L10,17 L8,17 L8,12 Z"></path>
    </svg>
  )
}

export default withIcon('IconKitchen')(IconKitchen)
