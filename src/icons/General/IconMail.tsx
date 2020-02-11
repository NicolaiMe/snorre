import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconMail: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M22,4 L2,4 L2,20 L22,20 L22,4 Z M20,8 L12,13 L4,8 L4,6 L12,11 L20,6 L20,8 Z"></path>
    </svg>
  )
}

export default withIcon('IconMail')(IconMail)
