import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconSave: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M17,3 L3,3 L3,21 L21,21 L21,7 L17,3 Z M12,19 C10.34,19 9,17.66 9,16 C9,14.34 10.34,13 12,13 C13.66,13 15,14.34 15,16 C15,17.66 13.66,19 12,19 Z M15,9 L5,9 L5,5 L15,5 L15,9 Z"></path>
    </svg>
  )
}

export default withIcon('IconSave')(IconSave)
