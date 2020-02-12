import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconFloor: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M11.9911111,17.8772942 L5.44,13.0697431 L4,14.1269009 L12,20 L20,14.1269009 L18.5511111,13.0613529 L11.9911111,17.8772942 Z M12,15.7461982 L18.5422222,10.9386471 L20,9.87309911 L12,4 L4,9.87309911 L5.44888889,10.9386471 L12,15.7461982 Z"></path>
    </svg>
  )
}

export default withIcon('IconFloor')(IconFloor)
