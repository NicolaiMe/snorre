import React from 'react'
import withIcon, { Props } from '../withIcon'

const IconBoard: React.FC<Props> = props => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12,2 C17.52,2 22,6.48 22,12 C22,17.52 17.52,22 12,22 C6.48,22 2,17.52 2,12 C2,6.48 6.48,2 12,2 Z M9.5,15.1197183 C8.3307405,15.1197183 6.28211669,15.5810537 5.41677059,16.5374649 C7.74850661,19.842612 11.0811832,19.992846 11.9004408,19.9996748 L12,20 C12.7075019,20 13.3741686,19.9168671 14,19.7506014 L14,19.7506014 L14,17.5056338 C13.9775,15.9640845 10.9925,15.1197183 9.5,15.1197183 Z M16.6802523,5.5 L10.3636364,5.5 L10.3636364,8 L10.5855662,8.09364451 C12.1029472,8.76830404 12.8616377,9.84507042 12.8616377,11.3239437 C12.8616377,12.8732394 12.1558534,13.870189 10.7442846,14.3147924 C11.5372782,14.3723665 12.2894498,14.5563978 13.0007993,14.8668863 L13.0007993,14.8668863 L13,14 L14.7,14 L14.7,15.7 L14.4271783,15.6992617 C14.6217256,15.8438905 14.8126662,15.9996922 15,16.1666667 L15,16.1666667 L15,19.4121069 L15.094629,19.3791745 C16.4142231,18.8926026 20,16.5090213 20,12.4560535 C20.1431779,8.51903573 17.8026276,6.31335582 16.6802523,5.5 L16.6802523,5.5 Z M17.7,14 L17.7,15.7 L16,15.7 L16,14 L17.7,14 Z M9.5,9 C8.255,9 7.25,10.0380282 7.25,11.3239437 C7.25,12.6098592 8.255,13.6478873 9.5,13.6478873 C10.745,13.6478873 11.75,12.6098592 11.75,11.3239437 C11.75,10.0380282 10.745,9 9.5,9 Z M17.7,11 L17.7,12.7 L16,12.7 L16,11 L17.7,11 Z M14.7,11 L14.7,12.7 L13,12.7 L13,11 L14.7,11 Z M17.7,8 L17.7,9.7 L16,9.7 L16,8 L17.7,8 Z M14.7,8 L14.7,9.7 L13,9.7 L13,8 L14.7,8 Z"></path>
    </svg>
  )
}

export default withIcon('IconBoard')(IconBoard)
