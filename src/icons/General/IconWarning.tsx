import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconWarning: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M1,22 L23,22 L12,3 L1,22 Z M13,19 L11,19 L11,17 L13,17 L13,19 Z M13,15 L11,15 L11,11 L13,11 L13,15 Z"></path>
    </svg>
  )
}

export default withIcon('IconWarning')(IconWarning)
