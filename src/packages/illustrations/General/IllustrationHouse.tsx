import React from 'react'
import withIllustration, { Props } from '../withIllustration'

const IllustrationHouse: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 80 44" {...props}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g>
          <g>
            <rect fill="#FFFFFF" x="5" y="0" width="8" height="15"></rect>
            <rect fill="#C3D0D8" x="9" y="0" width="6" height="9"></rect>
            <rect fill="#FFFFFF" x="0" y="20" width="56" height="24"></rect>
            <polygon fill="#091E43" points="12 4 68 4 56 20 0 20"></polygon>
            <polygon
              fill="#C3D0D8"
              points="56 20 68 4 80 20 80 44 56 44"
            ></polygon>
            <rect fill="#C3D0D8" x="40" y="28" width="8" height="8"></rect>
            <rect fill="#C3D0D8" x="8" y="28" width="8" height="8"></rect>
            <rect fill="#091E43" x="64" y="28" width="8" height="8"></rect>
            <rect fill="#C3D0D8" x="24" y="28" width="8" height="16"></rect>
            <polygon fill="#FFFFFF" points="28 8 40 20 16 20"></polygon>
            <polygon
              fill="#C3D0D8"
              transform="translate(40.000000, 14.000000) rotate(-180.000000) translate(-40.000000, -14.000000) "
              points="40 8 52 20 28 20"
            ></polygon>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default withIllustration('IllustrationHouse')(IllustrationHouse)
