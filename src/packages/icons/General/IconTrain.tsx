import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconTrain: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12,2 C8,2 4,2.5 4,6 L4,15.5 C4,17.43 5.57,19 7.5,19 L6,20.5 L6,21 L8,21 L10,19 L14,19 L16,21 L18,21 L18,20.5 L16.5,19 C18.43,19 20,17.43 20,15.5 L20,6 C20,2.5 16,2 12,2 Z M7.5,17 C6.67,17 6,16.33 6,15.5 C6,14.67 6.67,14 7.5,14 C8.33,14 9,14.67 9,15.5 C9,16.33 8.33,17 7.5,17 Z M11,10 L6,10 L6,6 L11,6 L11,10 Z M16.5,17 C15.67,17 15,16.33 15,15.5 C15,14.67 15.67,14 16.5,14 C17.33,14 18,14.67 18,15.5 C18,16.33 17.33,17 16.5,17 Z M18,10 L13,10 L13,6 L18,6 L18,10 Z"></path>
    </svg>
  )
}

export default withIcon('IconTrain')(IconTrain)
