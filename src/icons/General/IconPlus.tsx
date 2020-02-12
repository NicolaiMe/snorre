import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconPlus: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <polygon points="19 13 13 13 13 19 11 19 11 13 5 13 5 11 11 11 11 5 13 5 13 11 19 11"></polygon>
    </svg>
  )
}

export default withIcon('IconPlus')(IconPlus)
