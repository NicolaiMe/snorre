import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconDotOutline: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12,8 C14.209139,8 16,9.790861 16,12 C16,14.209139 14.209139,16 12,16 C9.790861,16 8,14.209139 8,12 C8,9.790861 9.790861,8 12,8 Z M12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 Z"></path>
    </svg>
  )
}

export default withIcon('IconDotOutline')(IconDotOutline)
