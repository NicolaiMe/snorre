import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconArrowLeft: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <polygon points="20 11 7.83 11 13.42 5.41 12 4 4 12 12 20 13.41 18.59 7.83 13 20 13"></polygon>
    </svg>
  )
}

export default withIcon('IconArrowLeft')(IconArrowLeft)
