/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import ButtonOrLink, {
  Props as ButtonOrLinkProps,
} from '../private/ButtonOrLink'
import { styles } from './styles'
import { IAppTheme } from '../../app-shell/theme'

export type IProps = ButtonOrLinkProps & {
  success?: boolean
  danger?: boolean
  highlight?: boolean
  outline?: boolean
  left?: boolean
  nostyle?: boolean
  border?: string
}

const Button: React.FC<IProps> = props => {
  const {
    danger,
    success,
    highlight,
    disabled,
    outline,
    afterIcon,
    beforeIcon,
    border,
    nostyle,
    ...restProps
  } = props

  return (
    <ButtonOrLink
      disabled={disabled}
      css={(theme: IAppTheme) => [
        styles.default(theme),
        danger && styles.danger(theme),
        success && styles.success(theme),
        highlight && styles.highlighted,
        disabled && styles.disabled(theme),
        outline && styles.outline(theme),
        (beforeIcon || afterIcon) && styles.icon(theme),
        beforeIcon && styles.beforeIcon,
        afterIcon && styles.afterIcon,
        border && styles.border(border),
        nostyle && styles.nostyle,
      ]}
      afterIcon={afterIcon}
      beforeIcon={beforeIcon}
      {...restProps}
    >
      {props.children}
    </ButtonOrLink>
  )
}

export default Button
