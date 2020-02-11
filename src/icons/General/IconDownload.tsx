import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconDownload: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M5,20.5 L19,20.5 L19,18.5 L5,18.5 M19,9.5 L15,9.5 L15,3.5 L9,3.5 L9,9.5 L5,9.5 L12,16.5 L19,9.5 Z"></path>
    </svg>
  )
}

export default withIcon('IconDownload')(IconDownload)
