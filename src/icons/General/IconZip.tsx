import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconZip: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M14,17 L12,17 L12,15 L10,15 L10,13 L12,13 L12,15 L14,15 M14,9 L12,9 L12,11 L14,11 L14,13 L12,13 L12,11 L10,11 L10,9 L12,9 L12,7 L10,7 L10,5 L12,5 L12,7 L14,7 M19,3 L5,3 C3.89,3 3,3.89 3,5 L3,19 C3,20.1045695 3.8954305,21 5,21 L19,21 C20.1045695,21 21,20.1045695 21,19 L21,5 C21,3.89 20.1,3 19,3 Z"></path>
    </svg>
  )
}

export default withIcon('IconZip')(IconZip)
