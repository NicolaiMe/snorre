import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconFamily: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M0,8.1 L9,0 L18,8.1 L15.3,8.1 L15.3,15.3 L2.7,15.3 L2.7,8.1 L0,8.1 M9,13.5 L9.648,12.906 C11.97,10.8 13.5,9.414 13.5,7.713 C13.5,6.327 12.411,5.238 11.025,5.238 C10.242,5.238 9.495,5.607 9,6.183 C8.505,5.607 7.758,5.238 6.975,5.238 C5.589,5.238 4.5,6.327 4.5,7.713 C4.5,9.414 6.03,10.8 8.352,12.906 L9,13.5 Z"></path>
    </svg>
  )
}

export default withIcon('IconFamily')(IconFamily)
