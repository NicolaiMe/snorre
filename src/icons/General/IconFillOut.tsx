import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconFillOut: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <g>
        <path d="M14,2 L20,8 L20,22 L4,22 L4.01,2 L14,2 Z M13,3.5 L5.62181233,3.5 L5.62181233,20.4402973 L18.5,20.4402973 L18.5,9 L13,3.5 Z"></path>
        <path d="M7,16.9630636 L7,19 L9.03693645,19 L15.044541,12.9923954 L13.0076046,10.955459 L7,16.9630636 Z M17,11.0369364 L14.9630636,9 L13.5888104,10.379685 L15.6257469,12.4166214 L17,11.0369364 L17,11.0369364 Z"></path>
      </g>
    </svg>
  )
}

export default withIcon('IconFillOut')(IconFillOut)
