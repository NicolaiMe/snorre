import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconCaretUp: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <polygon points="7 14 12 9 17 14"></polygon>
    </svg>
  )
}

export default withIcon('IconCaretUp')(IconCaretUp)
