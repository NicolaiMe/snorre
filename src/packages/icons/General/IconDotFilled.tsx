import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconDotFilled: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <circle id="path-1" cx="12" cy="12" r="4"></circle>
    </svg>
  )
}

export default withIcon('IconDotFilled')(IconDotFilled)
