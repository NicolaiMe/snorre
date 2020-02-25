import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconRefresh: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M19,8 L15,12 L18,12 C18,15.31 15.31,18 12,18 C10.99,18 10.03,17.75 9.2,17.3 L7.74,18.76 C8.97,19.54 10.43,20 12,20 C16.42,20 20,16.42 20,12 L23,12 L19,8 Z M6,12 C6,8.69 8.69,6 12,6 C13.01,6 13.97,6.25 14.8,6.7 L16.26,5.24 C15.03,4.46 13.57,4 12,4 C7.58,4 4,7.58 4,12 L1,12 L5,16 L9,12 L6,12 Z"></path>
    </svg>
  )
}

export default withIcon('IconRefresh')(IconRefresh)
