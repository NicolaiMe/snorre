/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { styles } from './styles'

interface IProps {
  checked?: boolean
  disabled?: boolean
  vertical?: boolean
  value?: string
}

const Checkbox: React.FC<IProps> = props => {
  const type: string = 'checkbox'

  return (
    <label
      css={theme => [
        styles.default(theme),
        props.vertical && styles.vertical,
        props.disabled && styles.disabled(theme),
      ]}
    >
      {props.children}
      <input
        type={type}
        defaultChecked={props.checked}
        value={props.value}
        disabled={props.disabled}
      />
      <span></span>
    </label>
  )
}

export default Checkbox
