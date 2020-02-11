import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconAttachment: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M18.5,16 L7,16 C4.79,16 3,14.21 3,12 C3,9.79 4.79,8 7,8 L19.5,8 C20.88,8 22,9.12 22,10.5 C22,11.88 20.88,13 19.5,13 L9,13 C8.45,13 8,12.55 8,12 C8,11.45 8.45,11 9,11 L18.5,11 L18.5,9.5 L9,9.5 C7.62,9.5 6.5,10.62 6.5,12 C6.5,13.38 7.62,14.5 9,14.5 L19.5,14.5 C21.71,14.5 23.5,12.71 23.5,10.5 C23.5,8.29 21.71,6.5 19.5,6.5 L7,6.5 C3.96,6.5 1.5,8.96 1.5,12 C1.5,15.04 3.96,17.5 7,17.5 L18.5,17.5 L18.5,16 Z"></path>
    </svg>
  )
}

export default withIcon('IconAttachment')(IconAttachment)
