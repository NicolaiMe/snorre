import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconStarHalf: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M22,9.24 L14.81,8.62 L12,2 L9.19,8.63 L2,9.24 L7.46,13.97 L5.82,21 L12,17.27 L18.18,21 L16.55,13.97 L22,9.24 Z M12,15.4 L12,6.1 L13.71,10.14 L18.09,10.52 L14.77,13.4 L15.77,17.68 L12,15.4 Z"></path>
    </svg>
  )
}

export default withIcon('IconStarHalf')(IconStarHalf)
