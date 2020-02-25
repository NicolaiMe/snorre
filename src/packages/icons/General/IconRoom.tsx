import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconRoom: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M13,7 L11,7 L11,9 L13,9 L13,7 Z M13,11 L11,11 L11,13 L13,13 L13,11 Z M17,11 L15,11 L15,13 L17,13 L17,11 Z M3,3 L3,21 L21,21 L21,3 L3,3 Z M19,19 L5,19 L5,5 L19,5 L19,19 Z M13,15 L11,15 L11,17 L13,17 L13,15 Z M9,11 L7,11 L7,13 L9,13 L9,11 Z"></path>
    </svg>
  )
}

export default withIcon('IconRoom')(IconRoom)
