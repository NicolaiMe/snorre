import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconWalk: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M13.5,5.5 C14.6,5.5 15.5,4.6 15.5,3.5 C15.5,2.4 14.6,1.5 13.5,1.5 C12.4,1.5 11.5,2.4 11.5,3.5 C11.5,4.6 12.4,5.5 13.5,5.5 Z M9.8,8.9 L7,23 L9.1,23 L10.9,15 L13,17 L13,23 L15,23 L15,15.5 L12.9,13.5 L13.5,10.5 C14.8,12 16.8,13 19,13 L19,11 C17.1,11 15.5,10 14.7,8.6 L13.7,7 C13.14,6.11 12.02,5.75 11.05,6.16 L6,8.3 L6,13 L8,13 L8,9.6 L9.8,8.9"></path>
    </svg>
  )
}

export default withIcon('IconWalk')(IconWalk)
