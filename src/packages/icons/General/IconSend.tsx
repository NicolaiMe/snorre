import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconSend: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <polygon points="2.01 21 23 12 2.01 3 2 10 17 12 2 14"></polygon>
    </svg>
  )
}

export default withIcon('IconSend')(IconSend)
