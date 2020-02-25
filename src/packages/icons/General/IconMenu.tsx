import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconMenu: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M3,18 L21,18 L21,16 L3,16 L3,18 Z M3,13 L21,13 L21,11 L3,11 L3,13 Z M3,6 L3,8 L21,8 L21,6 L3,6 Z"></path>
    </svg>
  )
}

export default withIcon('IconMenu')(IconMenu)
