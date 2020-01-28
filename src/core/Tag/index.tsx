/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { styles } from './styles'

interface IProps {
  neutral?: boolean
  success?: boolean
  info?: boolean
  danger?: boolean
  dark?: boolean
  light?: boolean
  withclose?: boolean
}

const Tag: React.FC<IProps> = props => {
  const Tag = props.withclose ? 'button' : 'div'

  return (
    <Tag
      css={[
        styles.default,
        props.neutral && styles.neutral,
        props.success && styles.success,
        props.info && styles.info,
        props.danger && styles.danger,
        props.dark && styles.dark,
        props.light && styles.light,
        props.withclose && styles.withclose,
      ]}
      {...props}
    >
      {props.children}
      {props.withclose ? <span>x</span> : null}
    </Tag>
  )
}

export default Tag
