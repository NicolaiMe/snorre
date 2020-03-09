/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { styles } from './styles'

interface IProps {
  type?: 'text' | 'search' | 'number' | 'password' | 'file'
  label?: string
  id?: string
  highlight?: boolean
  focus?: boolean
  placeholder?: string
  value?: string
  disabled?: boolean
  cardInput?: boolean
  children?: any
}

const Input: React.FC<IProps> = (props: IProps) => {
  const type: 'text' | 'search' | 'number' | 'password' | 'file' = props.type
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
          props.type === 'file' && styles.file,
          props.focus && styles.focused(theme),
          props.disabled && styles.disabled(theme),
          props.cardInput && styles.cardInput,
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
