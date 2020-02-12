import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconBookmarkOutline: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M19,3 L5,3 L5,21 L12,18 L19,21 L19,3 Z M17,18 L12,15.82 L7,18 L7,5 L17,5 L17,18 Z"></path>
    </svg>
  )
}

export default withIcon('IconBookmarkOutline')(IconBookmarkOutline)
