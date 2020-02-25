import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconArrowUp: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <polygon points="4 12 5.41 13.41 11 7.83 11 20 13 20 13 7.83 18.58 13.42 20 12 12 4"></polygon>
    </svg>
  )
}

export default withIcon('IconArrowUp')(IconArrowUp)
