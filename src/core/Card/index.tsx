/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { styles } from './styles'

type IProps = {
  withhover?: boolean
  primary?: boolean
  gray?: boolean
  onClick?: () => void
  noPadding?: boolean
  height?: number
  nobackground?: boolean
}

const Card: React.FC<IProps> = props => {
  return (
    <div
      css={theme => [
        styles.default,
        props.withhover && styles.withHover,
        props.primary && styles.primary(theme),
        props.gray && styles.gray,
        props.noPadding && styles.noPadding,
        props.height && styles.height(props.height),
        props.nobackground && styles.nobackground,
      ]}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

export default Card
