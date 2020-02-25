import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconMap: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12,4 C8.68285714,4 6,6.504 6,9.6 C6,13.8 12,20 12,20 C12,20 18,13.8 18,9.6 C18,6.504 15.3171429,4 12,4 Z M12,11.6 C10.8171429,11.6 9.85714286,10.704 9.85714286,9.6 C9.85714286,8.496 10.8171429,7.6 12,7.6 C13.1828571,7.6 14.1428571,8.496 14.1428571,9.6 C14.1428571,10.704 13.1828571,11.6 12,11.6 Z"></path>
    </svg>
  )
}

export default withIcon('IconMap')(IconMap)
