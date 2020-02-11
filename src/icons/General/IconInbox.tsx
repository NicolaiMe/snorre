import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconInbox: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M21,3 L3.01,3 L3.01,21 L21,21 L21,3 Z M19,15 L15,15 C15,16.66 13.65,18 12,18 C10.35,18 9,16.66 9,15 L5,15 L5,5 L19,5 L19,15 Z"></path>
    </svg>
  )
}

export default withIcon('IconInbox')(IconInbox)
