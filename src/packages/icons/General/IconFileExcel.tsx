import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconFileExcel: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M6,2 C4.8954305,2 4,2.8954305 4,4 L4,20 C4,21.1045695 4.8954305,22 6,22 L18,22 C19.1045695,22 20,21.1045695 20,20 L20,8 L14,2 L6,2 Z M15.8,20 L14,20 L12,16.6 L10,20 L8.2,20 L11.1,15.5 L8.2,11 L10,11 L12,14.4 L14,11 L15.8,11 L12.9,15.5 L15.8,20 M13,9 L13,3.5 L18.5,9 L13,9 Z"></path>
    </svg>
  )
}

export default withIcon('IconFileExcel')(IconFileExcel)
