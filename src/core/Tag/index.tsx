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
      css={theme => [
        styles.default(theme),
        props.neutral && styles.neutral(theme),
        props.success && styles.success(theme),
        props.info && styles.info(theme),
        props.danger && styles.danger(theme),
        props.dark && styles.dark(theme),
        props.light && styles.light(theme),
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
