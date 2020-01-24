/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { styles } from './styles'

interface IProps {
  type?: 'text' | 'search' | 'number'
  label: string
}

const Input: React.FC<IProps> = props => {
  const type: 'text' | 'search' | 'number' = props.type ? props.type : 'text'

  return (
    <input type={type} css={[styles.default]}>
      {React.Children.map(props.children, child => {
        if (!child) {
          return null
        }

        return child
      })}
    </input>
  )
}

export default Input
