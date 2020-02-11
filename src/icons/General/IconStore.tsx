import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconStore: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M21.9,8.89 L20.49,3 L16.74,3 L14.73,3 L13,3 L11,3 L9.28,3 L7.26,3 L3.51,3 L2.1,8.89 C1.86,9.91 2.08,10.95 2.72,11.77 C2.8,11.88 2.91,11.96 3,12.06 L3,21 L21,21 L21,12.06 C21.09,11.97 21.2,11.88 21.28,11.78 C21.92,10.96 22.15,9.91 21.9,8.89 Z M7.02,5 L6.44,9.86 C6.36,10.51 5.84,11 5.23,11 C4.74,11 4.43,10.71 4.3,10.53 C4.04,10.2 3.95,9.77 4.05,9.36 L5.09,5 L7.02,5 Z M18.91,5 L19.96,9.36 C20.06,9.78 19.97,10.2 19.71,10.53 C19.57,10.71 19.27,11 18.77,11 C18.16,11 17.63,10.51 17.56,9.86 L16.98,5 L18.91,5 Z M15.51,9.52 C15.56,9.91 15.44,10.3 15.18,10.59 C14.95,10.85 14.63,11 14.22,11 C13.55,11 13,10.41 13,9.69 L13,5 L14.96,5 L15.51,9.52 Z M11,9.69 C11,10.41 10.45,11 9.71,11 C9.37,11 9.06,10.85 8.82,10.59 C8.57,10.3 8.45,9.91 8.49,9.52 L9.04,5 L11,5 L11,9.69 Z M5,19 L5,12.97 C5.08,12.98 5.15,13 5.23,13 C6.1,13 6.89,12.64 7.47,12.05 C8.07,12.65 8.87,13 9.78,13 C10.65,13 11.43,12.64 12.01,12.07 C12.6,12.64 13.4,13 14.3,13 C15.14,13 15.94,12.65 16.54,12.05 C17.12,12.64 17.91,13 18.78,13 C18.86,13 18.93,12.98 19.01,12.97 L19.01,19 L5,19 Z"></path>
    </svg>
  )
}

export default withIcon('IconStore')(IconStore)
