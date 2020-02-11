import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconChevronLeft: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <polygon points="12.51 1.87 10.73 0.1 0.84 10 10.74 19.9 12.51 18.13 4.38 10"></polygon>
    </svg>
  )
}

export default withIcon('IconChevronLeft')(IconChevronLeft)
