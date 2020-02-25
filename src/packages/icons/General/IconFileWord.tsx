import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconFileWord: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M14,2 L6,2 C4.8954305,2 4,2.8954305 4,4 L4,20 C4,21.1045695 4.8954305,22 6,22 L18,22 C19.1045695,22 20,21.1045695 20,20 L20,8 L14,2 M15.2,20 L13.8,20 L12,13.2 L10.2,20 L8.8,20 L6.6,11 L8.1,11 L9.5,17.8 L11.3,11 L12.6,11 L14.4,17.8 L15.8,11 L17.3,11 L15.2,20 M13,9 L13,3.5 L18.5,9 L13,9 Z"></path>
    </svg>
  )
}

export default withIcon('IconFileWord')(IconFileWord)
