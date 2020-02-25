import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconCheck: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <polygon points="9 16.2 4.8 12 3.4 13.4 9 19 21 7 19.6 5.6"></polygon>
    </svg>
  )
}

export default withIcon('IconCheck')(IconCheck)
