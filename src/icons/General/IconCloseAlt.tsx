import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconCloseAlt: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12,2 C6.47,2 2,6.47 2,12 C2,17.53 6.47,22 12,22 C17.53,22 22,17.53 22,12 C22,6.47 17.53,2 12,2 Z M17,15.59 L15.59,17 L12,13.41 L8.41,17 L7,15.59 L10.59,12 L7,8.41 L8.41,7 L12,10.59 L15.59,7 L17,8.41 L13.41,12 L17,15.59 Z"></path>
    </svg>
  )
}

export default withIcon('IconCloseAlt')(IconCloseAlt)
