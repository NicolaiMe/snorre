import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconFerry: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M19,20 C17.61,20 16.22,19.53 15,18.68 C12.56,20.39 9.44,20.39 7,18.68 C5.78,19.53 4.39,20 3,20 L1,20 L1,22 L3,22 C4.38,22 5.74,21.65 7,21.01 C9.52,22.3 12.48,22.3 15,21.01 C16.26,21.66 17.62,22 19,22 L21,22 L21,20 L19,20 Z M2.95,18 L3,18 C4.6,18 6.02,17.12 7,16 C7.98,17.12 9.4,18 11,18 C12.6,18 14.02,17.12 15,16 C15.98,17.12 17.4,18 19,18 L19.05,18 L21.23,10.35 L19,9.62 L19,3 L14,3 L14,0 L8,0 L8,3 L3,3 L3,9.62 L0.77,10.35 L2.95,18 Z M5,5 L17,5 L17,8.97 L11,7 L5,8.97 L5,5 Z"></path>
    </svg>
  )
}

export default withIcon('IconFerry')(IconFerry)
