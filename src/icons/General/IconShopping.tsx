import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconShopping: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M8,10.2857143 C5.69881354,10.2857143 3.83333333,8.36693464 3.83333333,6 L5.5,6 C5.5,7.42016079 6.61928813,8.57142857 8,8.57142857 C9.38071187,8.57142857 10.5,7.42016079 10.5,6 L12.1666667,6 C12.1666667,8.36693464 10.3011865,10.2857143 8,10.2857143 M8,1.71428571 C9.38071187,1.71428571 10.5,2.8655535 10.5,4.28571429 L5.5,4.28571429 C5.5,2.8655535 6.61928813,1.71428571 8,1.71428571 M13.8333333,4.28571429 L12.1666667,4.28571429 C12.1666667,3.14907219 11.7276798,2.05898399 10.9462783,1.25525665 C10.1648767,0.451529316 9.10506871,0 8,0 C5.69881354,0 3.83333333,1.91877964 3.83333333,4.28571429 L2.16666667,4.28571429 C1.24166667,4.28571429 0.5,5.04857143 0.5,6 L0.5,16.2857143 C0.5,17.2324881 1.24619208,18 2.16666667,18 L13.8333333,18 C14.7538079,18 15.5,17.2324881 15.5,16.2857143 L15.5,6 C15.5,5.04857143 14.75,4.28571429 13.8333333,4.28571429 Z"></path>
    </svg>
  )
}

export default withIcon('IconShopping')(IconShopping)
