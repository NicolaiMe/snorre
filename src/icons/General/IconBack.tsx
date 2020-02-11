import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconBack: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12.5,8 C9.85,8 7.45,8.99 5.6,10.6 L2,7 L2,16 L11,16 L7.38,12.38 C8.77,11.22 10.54,10.5 12.5,10.5 C16.04,10.5 19.05,12.81 20.1,16 L22.47,15.22 C21.08,11.03 17.15,8 12.5,8 Z"></path>
    </svg>
  )
}

export default withIcon('IconBack')(IconBack)
