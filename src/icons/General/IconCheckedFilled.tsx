import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconCheckedFilled: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M10,17 L5,12 L6.41,10.59 L10,14.17 L17.59,6.58 L19,8 L10,17 Z"></path>
    </svg>
  )
}

export default withIcon('IconCheckedFilled')(IconCheckedFilled)
