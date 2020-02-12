import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconSwitch: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M7,7 L17,7 L17,10 L21,6 L17,2 L17,5 L5,5 L5,11 L7,11 L7,7 Z M17,17 L7,17 L7,14 L3,18 L7,22 L7,19 L19,19 L19,13 L17,13 L17,17 Z"></path>
    </svg>
  )
}

export default withIcon('IconSwitch')(IconSwitch)
