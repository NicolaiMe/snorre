import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconChevronRight: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <polygon points="0.49 18.13 2.26 19.9 12.16 10 2.26 0.1 0.49 1.87 8.62 10 0.49 18.13"></polygon>
    </svg>
  )
}

export default withIcon('IconChevronRight')(IconChevronRight)
