import React from 'react'
import withIllustration, { Props } from '../withIllustration'

const IllustrationLowHouse: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 80 60" {...props}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g>
          <g>
            <rect fill="#FFFFFF" x="0" y="4" width="56" height="56"></rect>
            <rect fill="#C3D0D8" x="56" y="4" width="24" height="56"></rect>
            <rect fill="#091E43" x="0" y="0" width="56" height="4"></rect>
            <rect fill="#031432" x="56" y="0" width="24" height="4"></rect>
            <rect fill="#C3D0D8" x="8" y="44" width="8" height="8"></rect>
            <rect fill="#C3D0D8" x="8" y="28" width="8" height="8"></rect>
            <rect fill="#C3D0D8" x="24" y="28" width="8" height="8"></rect>
            <rect fill="#C3D0D8" x="8" y="12" width="8" height="8"></rect>
            <rect fill="#C3D0D8" x="24" y="12" width="8" height="8"></rect>
            <rect fill="#091E43" x="24" y="44" width="8" height="16"></rect>
            <rect fill="#C3D0D8" x="40" y="44" width="8" height="8"></rect>
            <rect fill="#091E43" x="64" y="44" width="8" height="8"></rect>
            <rect fill="#C3D0D8" x="40" y="28" width="8" height="8"></rect>
            <rect fill="#091E43" x="64" y="28" width="8" height="8"></rect>
            <rect fill="#C3D0D8" x="40" y="12" width="8" height="8"></rect>
            <rect fill="#091E43" x="64" y="12" width="8" height="8"></rect>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default withIllustration('IllustrationLowHouse')(IllustrationLowHouse)
