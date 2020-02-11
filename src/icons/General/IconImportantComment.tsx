import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconImportantComment: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M22,2 L2,2 L2,22 L6,18 L22,18 L22,2 Z M13,14 L11,14 L11,12 L13,12 L13,14 Z M13,10 L11,10 L11,6 L13,6 L13,10 Z"></path>
    </svg>
  )
}

export default withIcon('IconImportantComment')(IconImportantComment)
