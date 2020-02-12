import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconUpload: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M9,16.5 L9,10.5 L5,10.5 L12,3.5 L19,10.5 L15,10.5 L15,16.5 L9,16.5 M5,20.5 L5,18.5 L19,18.5 L19,20.5 L5,20.5 Z"></path>
    </svg>
  )
}

export default withIcon('IconUpload')(IconUpload)
