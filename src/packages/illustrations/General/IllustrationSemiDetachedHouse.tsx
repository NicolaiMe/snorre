import React from 'react'
import withIllustration, { Props } from '../withIllustration'

const IllustrationSemiDetachedHouse: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 112 42" {...props}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g>
          <g>
            <rect fill="#FFFFFF" x="0" y="18" width="88" height="24"></rect>
            <polygon fill="#091E43" points="12 2 100 2 88 18 0 18"></polygon>
            <polygon
              fill="#C3D0D8"
              points="88 18 100 2 112 18 112 42 88 42"
            ></polygon>
            <rect fill="#C3D0D8" x="48" y="26" width="8" height="16"></rect>
            <rect fill="#C3D0D8" x="64" y="26" width="16" height="8"></rect>
            <rect fill="#C3D0D8" x="8" y="26" width="16" height="8"></rect>
            <rect fill="#091E43" x="96" y="26" width="8" height="8"></rect>
            <rect fill="#C3D0D8" x="32" y="26" width="8" height="16"></rect>
            <polygon fill="#FFFFFF" points="16 0 22 0 22 10 16 10"></polygon>
            <polygon fill="#FFFFFF" points="72 0 78 0 78 10 72 10"></polygon>
            <polygon
              fill="#C3D0D8"
              points="22 -4.57966998e-15 25 -4.57966998e-15 25 5.99132231 22 10"
            ></polygon>
            <polygon
              fill="#C3D0D8"
              points="78 -4.57966998e-15 81 -4.57966998e-15 81 5.99132231 78 10"
            ></polygon>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default withIllustration('IllustrationSemiDetachedHouse')(
  IllustrationSemiDetachedHouse
)
