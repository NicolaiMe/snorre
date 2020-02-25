import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconGrid: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M4,11.1111111 L11.1111111,11.1111111 L11.1111111,4 L4,4 M4,20 L11.1111111,20 L11.1111111,12.8888889 L4,12.8888889 M12.8888889,20 L20,20 L20,12.8888889 L12.8888889,12.8888889 M12.8888889,4 L12.8888889,11.1111111 L20,11.1111111 L20,4"></path>
    </svg>
  )
}

export default withIcon('IconGrid')(IconGrid)
