import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconArchives: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M18.71,3 L5.29,3 L3,5.79 L3,21 L21,21 L21,5.79 L18.71,3 Z M12,17.5 L6.5,12 L10,12 L10,10 L14,10 L14,12 L17.5,12 L12,17.5 Z M5.12,5 L5.93,4 L17.93,4 L18.87,5 L5.12,5 Z"></path>
    </svg>
  )
}

export default withIcon('IconArchives')(IconArchives)
