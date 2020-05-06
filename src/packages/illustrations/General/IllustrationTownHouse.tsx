import React from 'react'
import withIllustration, { Props } from '../withIllustration'

const IllustrationTownHouse: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 152 40" {...props}>
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
            <rect fill="#C3D0D8" x="8" y="24" width="8" height="16"></rect>
            <rect fill="#FFFFFF" x="44" y="16" width="40" height="24"></rect>
            <polygon fill="#091E43" points="56 0 96 0 84 16 44 16"></polygon>
            <polygon
              fill="#C3D0D8"
              points="84 16 96 0 108 16 108 40 84 40"
            ></polygon>
            <rect fill="#C3D0D8" x="68" y="24" width="8" height="8"></rect>
            <rect fill="#C3D0D8" x="52" y="24" width="8" height="16"></rect>
            <rect fill="#FFFFFF" x="88" y="16" width="40" height="24"></rect>
            <polygon fill="#091E43" points="100 0 140 0 128 16 88 16"></polygon>
            <polygon
              fill="#C3D0D8"
              points="128 16 140 0 152 16 152 40 128 40"
            ></polygon>
            <rect fill="#C3D0D8" x="112" y="24" width="8" height="8"></rect>
            <rect fill="#091E43" x="136" y="24" width="8" height="8"></rect>
            <rect fill="#C3D0D8" x="96" y="24" width="8" height="16"></rect>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default withIllustration('IllustrationTownHouse')(IllustrationTownHouse)
