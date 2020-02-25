import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconArrowRight: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <polygon points="12 4 10.59 5.41 16.17 11 4 11 4 13 16.17 13 10.59 18.59 12 20 20 12"></polygon>
    </svg>
  )
}

export default withIcon('IconArrowRight')(IconArrowRight)
