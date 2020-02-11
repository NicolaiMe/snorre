import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconGarage: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M21,21 L18.4285714,21 L18.4285714,10.2 L5.57142857,10.2 L5.57142857,21 L3,21 L3,7.8 L12,3 L21,7.8 L21,21 M6.85714286,11.4 L17.1428571,11.4 L17.1428571,13.8 L6.85714286,13.8 L6.85714286,11.4 M6.85714286,15 L17.1428571,15 L17.1428571,17.4 L6.85714286,17.4 L6.85714286,15 M17.1428571,18.6 L17.1428571,21 L6.85714286,21 L6.85714286,18.6 L17.1428571,18.6 Z"></path>
    </svg>
  )
}

export default withIcon('IconGarage')(IconGarage)
