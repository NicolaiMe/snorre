import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconParking: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M13.2,11 L10,11 L10,7 L13.2,7 C14.3045695,7 15.2,7.8954305 15.2,9 C15.2,10.1045695 14.3045695,11 13.2,11 M13,3 L6,3 L6,21 L10,21 L10,15 L13,15 C16.3137085,15 19,12.3137085 19,9 C19,5.68 16.31,3 13,3 Z"></path>
    </svg>
  )
}

export default withIcon('IconParking')(IconParking)
