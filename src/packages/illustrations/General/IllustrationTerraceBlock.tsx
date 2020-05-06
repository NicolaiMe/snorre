import React from 'react'
import withIllustration, { Props } from '../withIllustration'

const IllustrationTerraceBlock: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 128 76" {...props}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g>
          <g>
            <rect fill="#FFFFFF" x="0" y="52" width="72" height="24"></rect>
            <rect fill="#091E43" x="32" y="60" width="8" height="16"></rect>
            <rect fill="#C3D0D8" x="8" y="60" width="16" height="8"></rect>
            <rect fill="#C3D0D8" x="48" y="60" width="16" height="8"></rect>
            <rect fill="#FFFFFF" x="16" y="28" width="72" height="24"></rect>
            <rect fill="#FFFFFF" x="32" y="4" width="72" height="24"></rect>
            <rect fill="#C3D0D8" x="104" y="4" width="24" height="24"></rect>
            <rect fill="#C3D0D8" x="88" y="28" width="40" height="24"></rect>
            <rect fill="#C3D0D8" x="72" y="52" width="56" height="24"></rect>
            <rect fill="#C3D0D8" x="24" y="36" width="8" height="8"></rect>
            <rect fill="#C3D0D8" x="40" y="36" width="8" height="8"></rect>
            <rect fill="#C3D0D8" x="56" y="36" width="8" height="8"></rect>
            <rect fill="#C3D0D8" x="72" y="36" width="8" height="8"></rect>
            <rect fill="#C3D0D8" x="40" y="12" width="8" height="8"></rect>
            <rect fill="#C3D0D8" x="56" y="12" width="8" height="8"></rect>
            <rect fill="#C3D0D8" x="72" y="12" width="8" height="8"></rect>
            <rect fill="#C3D0D8" x="88" y="12" width="8" height="8"></rect>
            <rect fill="#091E43" x="112" y="12" width="8" height="8"></rect>
            <rect fill="#091E43" x="112" y="36" width="8" height="8"></rect>
            <rect fill="#091E43" x="112" y="60" width="8" height="8"></rect>
            <rect fill="#091E43" x="96" y="36" width="8" height="8"></rect>
            <rect fill="#091E43" x="96" y="60" width="8" height="8"></rect>
            <rect fill="#091E43" x="80" y="60" width="8" height="8"></rect>
            <rect fill="#091E43" x="32" y="0" width="72" height="4"></rect>
            <rect fill="#031432" x="104" y="0" width="24" height="4"></rect>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default withIllustration('IllustrationTerraceBlock')(
  IllustrationTerraceBlock
)
