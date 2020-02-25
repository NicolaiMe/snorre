import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconStarFilled: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <polygon points="12 17.27 18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21"></polygon>
    </svg>
  )
}

export default withIcon('IconStarFilled')(IconStarFilled)
