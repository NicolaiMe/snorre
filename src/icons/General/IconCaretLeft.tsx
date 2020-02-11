import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconCaretLeft: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <polygon points="14 7 9 12 14 17"></polygon>
    </svg>
  )
}

export default withIcon('IconCaretLeft')(IconCaretLeft)
