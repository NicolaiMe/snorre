import React from 'react'
import withIllustration, { Props } from '../withIllustration'

const IllustrationSmallHouse: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 64 40" {...props}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g>
          <g>
            <rect fill="#FFFFFF" x="0" y="16" width="40" height="24"></rect>
            <polygon fill="#091E43" points="12 0 52 0 40 16 0 16"></polygon>
            <polygon
              fill="#C3D0D8"
              points="40 16 52 0 64 16 64 40 40 40"
            ></polygon>
            <rect fill="#C3D0D8" x="24" y="24" width="8" height="8"></rect>
            <rect fill="#091E43" x="48" y="24" width="8" height="8"></rect>
            <rect fill="#C3D0D8" x="8" y="24" width="8" height="16"></rect>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default withIllustration('IllustrationSmallHouse')(
  IllustrationSmallHouse
)
