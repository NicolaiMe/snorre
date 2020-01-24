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
  const Tag = 'div'

  return (
    <Tag
      css={[
        styles.default,
        props.success && styles.success,
        props.info && styles.info,
        props.danger && styles.danger,
      ]}
      {...props}
    >
      {props.children}

      <span>x</span>
    </Tag>
  )
}

export default Alert
