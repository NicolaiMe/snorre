/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { styles } from './styles'

type IProps = {
  onClick?: () => void
  onChange?: () => void
  name?: string
  value?: string
  checked?: boolean
  disabled?: boolean
  vertical?: boolean
}

const Radio: React.FC<IProps> = props => {
  return (
    <label
      css={theme => [
        styles.default(theme),
        props.vertical && styles.vertical,
        props.disabled && styles.disabled(theme),
      ]}
      onClick={props.onClick}
    >
      {props.children}
      <input
        type="radio"
        name={props.name}
        disabled={props.disabled}
        defaultChecked={props.checked}
      />
      <span></span>
    </label>
  )
}

export default Radio
