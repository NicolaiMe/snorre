/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { styles } from './styles'

interface IProps {
  /** Content within the checkbox. */
  children?: NonNullable<React.ReactNode>
  /** Name of checkbox */
  name?: string
  /** Default checked */
  checked?: boolean
  /** Disabled checkbox */
  disabled?: boolean
  /** Vertical align */
  vertical?: boolean
  /** Remove margins */
  nomargin?: boolean
  /** Value? */
  value?: string
  /** CB when checkbox changes */
  onChange?: (cbModel: CBModel) => boolean
}

interface CBModel {
  name: string
  checked: boolean
}

const Checkbox: React.FC<IProps> = (props: IProps) => {
  const type: string = 'checkbox'

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange({ name: e.target.name, checked: e.target.checked })
    }
  }

  return (
    <label
      css={theme => [
        styles.default(theme),
        props.vertical && styles.vertical,
        props.disabled && styles.disabled(theme),
        props.nomargin && styles.nomargin,
      ]}
    >
      {props.children}
      <input
        type={type}
        defaultChecked={props.checked}
        value={props.value}
        name={props.name}
        disabled={props.disabled}
        onChange={onChange}
      />
      <span></span>
    </label>
  )
}

export default Checkbox
