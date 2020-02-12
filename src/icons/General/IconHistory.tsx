import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconHistory: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M13,3 C8.03,3 4,7.03 4,12 L1,12 L4.89,15.89 L4.96,16.03 L9,12 L6,12 C6,8.13 9.13,5 13,5 C16.87,5 20,8.13 20,12 C20,15.87 16.87,19 13,19 C11.07,19 9.32,18.21 8.06,16.94 L6.64,18.36 C8.27,19.99 10.51,21 13,21 C17.97,21 22,16.97 22,12 C22,7.03 17.97,3 13,3 Z M12,8 L12,13 L16.25,15.52 L17.02,14.23 L13.5,12.14 L13.5,8 L12,8 Z"></path>
    </svg>
  )
}

export default withIcon('IconHistory')(IconHistory)
