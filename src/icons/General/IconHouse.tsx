import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconHouse: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <polygon points="19 9.8 19 4.5 16 4.5 16 7.1 12 3.5 2 12.5 5 12.5 5 20.5 10 20.5 10 14.5 14 14.5 14 20.5 19 20.5 19 12.5 22 12.5"></polygon>
    </svg>
  )
}

export default withIcon('IconHouse')(IconHouse)
