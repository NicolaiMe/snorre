import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconExternalLink: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M19,19 L5,19 L5,5 L12,5 L12,3 L3,3 L3,21 L21,21 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z"></path>
    </svg>
  )
}

export default withIcon('IconExternalLink')(IconExternalLink)
