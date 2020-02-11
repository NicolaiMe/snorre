import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconCaretDown: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <polygon points="7 10 12 15 17 10"></polygon>
    </svg>
  )
}

export default withIcon('IconCaretDown')(IconCaretDown)
