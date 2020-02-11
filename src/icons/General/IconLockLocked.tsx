import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconLockLocked: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M20,8 L17,8 L17,6.21 C17,3.6 15.09,1.27 12.49,1.02 C9.51,0.74 7,3.08 7,6 L7,8 L4,8 L4,22 L20,22 L20,8 Z M12,17 C10.9,17 10,16.1 10,15 C10,13.9 10.9,13 12,13 C13.1,13 14,13.9 14,15 C14,16.1 13.1,17 12,17 Z M9,8 L9,6 C9,4.34 10.34,3 12,3 C13.66,3 15,4.34 15,6 L15,8 L9,8 Z"></path>
    </svg>
  )
}

export default withIcon('IconLockLocked')(IconLockLocked)
