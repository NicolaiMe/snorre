/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import IllustrationAppartment from './Appartment'
import { SvgTheme, withoutBackground } from './styles'

interface IProps {
  withoutBackground?: boolean
}

const Illustration: React.FC<IProps> = props => {
  return (
    <div
      css={theme => [
        SvgTheme(theme),
        props.withoutBackground && withoutBackground,
      ]}
    >
      <IllustrationAppartment />
    </div>
  )
}

export default Illustration
