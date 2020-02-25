import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconDraft: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M21.99,6.86 L12,1 L2,6.86 L2,20 L22,20 L21.99,6.86 Z M12,13 L3.74,7.84 L12,3 L20.26,7.84 L12,13 Z"></path>
    </svg>
  )
}

export default withIcon('IconDraft')(IconDraft)
