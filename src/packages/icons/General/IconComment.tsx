import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconComment: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M21.99,2 L2,2 L2,18 L18,18 L22,22 L21.99,2 Z M18,14 L6,14 L6,12 L18,12 L18,14 Z M18,11 L6,11 L6,9 L18,9 L18,11 Z M18,8 L6,8 L6,6 L18,6 L18,8 Z"></path>
    </svg>
  )
}

export default withIcon('IconComment')(IconComment)
