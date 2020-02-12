/** @jsx jsx */
import React, { ChangeEvent } from 'react'
import { jsx } from '@emotion/core'
import { styles } from './styles'

interface IProps {
  checked?: boolean
  disabled?: boolean
  vertical?: boolean
  value?: string
  onChange?: (checked: boolean) => boolean
}

const Checkbox: React.FC<IProps> = props => {
  const type: string = 'checkbox'

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e.target.checked)
    }
  }

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
        onChange={onChange}
      />
      <span></span>
    </label>
  )
}

export default Checkbox
