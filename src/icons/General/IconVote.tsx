import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconVote: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M18,13 L17.32,13 L15.32,15 L17.23,15 L19,17 L5,17 L6.78,15 L8.83,15 L6.83,13 L6,13 L3,16 L3,22 L21,22 L21,16 L18,13 Z M19.81,7.96 L13.45,1.6 L5.68,9.36 L12.04,15.72 L19.81,7.96 Z M13.46,4.41 L17,7.95 L12.05,12.9 L8.51,9.36 L13.46,4.41 L13.46,4.41 Z"></path>
    </svg>
  )
}

export default withIcon('IconVote')(IconVote)
