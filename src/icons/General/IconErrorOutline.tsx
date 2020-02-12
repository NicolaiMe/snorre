import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconErrorOutline: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M11,15 L13,15 L13,17 L11,17 L11,15 Z M11,7 L13,7 L13,13 L11,13 L11,7 Z M11.99,2 C6.47,2 2,6.48 2,12 C2,17.52 6.47,22 11.99,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 11.99,2 Z M12,20 C7.58,20 4,16.42 4,12 C4,7.58 7.58,4 12,4 C16.42,4 20,7.58 20,12 C20,16.42 16.42,20 12,20 Z"></path>
    </svg>
  )
}

export default withIcon('IconErrorOutline')(IconErrorOutline)
