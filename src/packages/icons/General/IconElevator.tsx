import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconElevator: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M7,2 L11,6 L8,6 L8,10 L6,10 L6,6 L3,6 L7,2 M17,10 L13,6 L16,6 L16,2 L18,2 L18,6 L21,6 L17,10 M7,12 L17,12 C18.1045695,12 19,12.8954305 19,14 L19,20 C19,21.1045695 18.1045695,22 17,22 L7,22 C5.8954305,22 5,21.1045695 5,20 L5,14 C5,12.8954305 5.8954305,12 7,12 M7,14 L7,20 L17,20 L17,14 L7,14 Z"></path>
    </svg>
  )
}

export default withIcon('IconElevator')(IconElevator)
