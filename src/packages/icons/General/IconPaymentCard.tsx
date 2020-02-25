import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconPaymentCard: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M22,4 L2.01,4 L2,20 L22,20 L22,4 Z M20,18 L4,18 L4,12 L20,12 L20,18 Z M20,8 L4,8 L4,6 L20,6 L20,8 Z"></path>
    </svg>
  )
}

export default withIcon('IconPaymentCard')(IconPaymentCard)
