import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconFile: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M13,9 L13,3.5 L18.5,9 M6,2 C4.89,2 4,2.89 4,4 L4,20 C4,21.1045695 4.8954305,22 6,22 L18,22 C19.1045695,22 20,21.1045695 20,20 L20,8 L14,2 L6,2 Z"></path>
    </svg>
  )
}

export default withIcon('IconFile')(IconFile)
