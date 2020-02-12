import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconArrowDown: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <polygon points="20 12 18.59 10.59 13 16.17 13 4 11 4 11 16.17 5.42 10.58 4 12 12 20"></polygon>
    </svg>
  )
}

export default withIcon('IconArrowDown')(IconArrowDown)
