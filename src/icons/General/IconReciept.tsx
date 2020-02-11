import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconReciept: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M18,17 L6,17 L6,15 L18,15 L18,17 Z M18,13 L6,13 L6,11 L18,11 L18,13 Z M18,9 L6,9 L6,7 L18,7 L18,9 Z M3,22 L4.5,20.5 L6,22 L7.5,20.5 L9,22 L10.5,20.5 L12,22 L13.5,20.5 L15,22 L16.5,20.5 L18,22 L19.5,20.5 L21,22 L21,2 L19.5,3.5 L18,2 L16.5,3.5 L15,2 L13.5,3.5 L12,2 L10.5,3.5 L9,2 L7.5,3.5 L6,2 L4.5,3.5 L3,2 L3,22 Z"></path>
    </svg>
  )
}

export default withIcon('IconReciept')(IconReciept)
