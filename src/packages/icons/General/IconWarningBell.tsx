import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconWarningBell: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12,23 C13.1,23 13.99,22.11 13.99,21.01 L10.01,21.01 C10.01,22.11 10.9,23 12,23 Z M19,17 L19,11 C19,7.65 16.64,4.85 13.5,4.17 L13.5,1.5 L10.5,1.5 L10.5,4.17 C7.36,4.85 5,7.65 5,11 L5,17 L3,19 L3,20 L21,20 L21,19 L19,17 Z M13,16 L11,16 L11,14 L13,14 L13,16 Z M13,12 L11,12 L11,8 L13,8 L13,12 Z"></path>
    </svg>
  )
}

export default withIcon('IconWarningBell')(IconWarningBell)
