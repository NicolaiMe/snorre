import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconLockOpen: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M20,8 L17,8 L17,6.21 C17,3.6 15.09,1.27 12.49,1.02 C9.51,0.74 7,3.08 7,6 L9,6 C9,4.87 9.6,3.76 10.64,3.3 C12.85,2.31 15,3.9 15,6 L15,8 L4,8 L4,22 L20,22 L20,8 Z M18,20 L6,20 L6,10 L18,10 L18,20 Z M12,17 C13.1,17 14,16.1 14,15 C14,13.9 13.1,13 12,13 C10.9,13 10,13.9 10,15 C10,16.1 10.9,17 12,17 Z"></path>
    </svg>
  )
}

export default withIcon('IconLockOpen')(IconLockOpen)
