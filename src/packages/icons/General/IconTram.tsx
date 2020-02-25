import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconTram: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M13,5 L13.75,3.5 L17,3.5 L17,2 L7,2 L7,3.5 L11.75,3.5 L11,5 C7.87,5.09 5,5.73 5,8.5 L5,17 C5,18.5 6.11,19.73 7.55,19.95 L6,21.5 L6,22 L8,22 L10,20 L14,20 L16,22 L18,22 L18,21.5 L16.45,19.95 C17.89,19.73 19,18.5 19,17 L19,8.5 C19,5.73 16.13,5.09 13,5 Z M12,18.5 C11.17,18.5 10.5,17.83 10.5,17 C10.5,16.17 11.17,15.5 12,15.5 C12.83,15.5 13.5,16.17 13.5,17 C13.5,17.83 12.83,18.5 12,18.5 Z M17,14 L7,14 L7,9 L17,9 L17,14 Z"></path>
    </svg>
  )
}

export default withIcon('IconTram')(IconTram)
