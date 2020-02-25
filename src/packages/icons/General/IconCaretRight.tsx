import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconCaretRight: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <polygon points="10 17 15 12 10 7"></polygon>
    </svg>
  )
}

export default withIcon('IconCaretRight')(IconCaretRight)
