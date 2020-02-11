import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconMinus: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <polygon points="19 13 5 13 5 11 19 11"></polygon>
    </svg>
  )
}

export default withIcon('IconMinus')(IconMinus)
