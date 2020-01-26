/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { styles } from './styles'

interface IProps {
  intro?: boolean
  small?: boolean
  bold?: boolean
  semiBold?: boolean
  subtle?: boolean
}

const Text: React.FC<IProps> = props => {
  return (
    <span
      css={[
        styles.default,
        props.intro && styles.intro,
        props.small && styles.small,
        props.bold && styles.bold,
        props.semiBold && styles.semiBold,
        props.subtle && styles.subtle,
      ]}
      {...props}
    >
      {props.children}
    </span>
  )
}

export default Text
