import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconBookmarkFilled: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <polygon points="19 3 5 3 5 21 12 18 19 21"></polygon>
    </svg>
  )
}

export default withIcon('IconBookmarkFilled')(IconBookmarkFilled)
