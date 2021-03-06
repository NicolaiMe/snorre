import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconApartment: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M17,11 L17,3 L7,3 L7,7 L3,7 L3,21 L11,21 L11,17 L13,17 L13,21 L21,21 L21,11 L17,11 Z M7,19 L5,19 L5,17 L7,17 L7,19 Z M7,15 L5,15 L5,13 L7,13 L7,15 Z M7,11 L5,11 L5,9 L7,9 L7,11 Z M11,15 L9,15 L9,13 L11,13 L11,15 Z M11,11 L9,11 L9,9 L11,9 L11,11 Z M11,7 L9,7 L9,5 L11,5 L11,7 Z M15,15 L13,15 L13,13 L15,13 L15,15 Z M15,11 L13,11 L13,9 L15,9 L15,11 Z M15,7 L13,7 L13,5 L15,5 L15,7 Z M19,19 L17,19 L17,17 L19,17 L19,19 Z M19,15 L17,15 L17,13 L19,13 L19,15 Z"></path>
    </svg>
  )
}

export default withIcon('IconApartment')(IconApartment)
