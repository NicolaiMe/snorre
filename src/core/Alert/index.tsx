/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { styles } from './styles'

interface IProps {
  success?: boolean
  danger?: boolean
  info?: boolean
}

const Alert: React.FC<IProps> = props => {
  return (
    <div
      css={theme => [
        styles.default(theme),
        props.success && styles.success(theme),
        props.info && styles.info(theme),
        props.danger && styles.danger(theme),
      ]}
    >
      {props.children}

      <span>x</span>
    </div>
  )
}

export default Alert
