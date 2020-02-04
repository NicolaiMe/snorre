/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { styles } from './styles'
import { IAppTheme } from '../../app-shell/theme'

export interface IProps {
  success?: boolean
  danger?: boolean
  disabled?: boolean
  highlight?: boolean
  outline?: boolean
}

const Button: React.FC<IProps> = props => {
  return (
    <button
      css={(theme: IAppTheme) => [
        styles.default(theme),
        props.danger && styles.danger(theme),
        props.success && styles.success(theme),
        props.highlight && styles.highlighted,
        props.disabled && styles.disabled(theme),
        props.outline && styles.outline(theme),
      ]}
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button
