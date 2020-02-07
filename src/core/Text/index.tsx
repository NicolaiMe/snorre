/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { styles } from './styles'

interface IProps {
  paragraph?: boolean
  intro?: boolean
  small?: boolean
  extrasmall?: boolean
  bold?: boolean
  semibold?: boolean
  subtle?: boolean
}

const Text: React.FC<IProps> = props => {
  const Tag = props.paragraph ? 'p' : 'span'
  return (
    <Tag
      css={theme => [
        styles.default,
        props.intro && styles.intro,
        props.small && styles.small,
        props.extrasmall && styles.extrasmall,
        props.bold && styles.bold,
        props.semibold && styles.semiBold,
        props.subtle && styles.subtle(theme),
        props.paragraph && styles.paragraph,
      ]}
    >
      {props.children}
    </Tag>
  )
}

export default Text
