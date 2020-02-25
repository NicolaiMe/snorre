import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconBus: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M4,16 C4,16.88 4.39,17.67 5,18.22 L5,21 L8,21 L8,19 L16,19 L16,21 L19,21 L19,18.22 C19.61,17.67 20,16.88 20,16 L20,6 C20,2.5 16.42,2 12,2 C7.58,2 4,2.5 4,6 L4,16 Z M7.5,17 C6.67,17 6,16.33 6,15.5 C6,14.67 6.67,14 7.5,14 C8.33,14 9,14.67 9,15.5 C9,16.33 8.33,17 7.5,17 Z M16.5,17 C15.67,17 15,16.33 15,15.5 C15,14.67 15.67,14 16.5,14 C17.33,14 18,14.67 18,15.5 C18,16.33 17.33,17 16.5,17 Z M18,11 L6,11 L6,6 L18,6 L18,11 Z"></path>
    </svg>
  )
}

export default withIcon('IconBus')(IconBus)
