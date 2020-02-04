/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { styles } from './styles'

interface IProps {
  type?: 'text' | 'search' | 'number' | 'password'
  label?: string
  id?: string
  highlight?: boolean
  focus?: boolean
  placeholder?: string
  value?: string
  disabled?: boolean
}

const Input: React.FC<IProps> = props => {
  const type: 'text' | 'search' | 'number' | 'password' = props.type
    ? props.type
    : 'text'
  const span = props.label ? (
    <span css={props.focus && styles.focusedLabel}>{props.label}</span>
  ) : null

  return (
    <label
      css={theme => [
        styles.default(theme),
        props.highlight && styles.highligted,
      ]}
    >
      {span}
      <input
        type={type}
        placeholder={props.placeholder}
        defaultValue={props.value}
        disabled={props.disabled}
        css={theme => [
          props.type === 'text' && styles.text(theme),
          props.type === 'search' && styles.search(theme),
          props.type === 'password' && styles.password(theme),
          props.focus && styles.focused(theme),
          props.disabled && styles.disabled(theme),
        ]}
      >
        {React.Children.map(props.children, child => {
          if (!child) {
            return null
          }

          return child
        })}
      </input>
    </label>
  )
}

export default Input
