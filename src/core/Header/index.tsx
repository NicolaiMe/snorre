/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { styles } from './styles'

interface IProps {
  level: 1 | 2 | 3 | 4 | 5
  color?: string
}

const Header: React.FC<IProps> = props => {
  const Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' = `h${props.level}` as 'h1'
  return (
    <Tag
      css={theme => [
        styles.default(theme, props.color),
        props.level === 1 && styles.h1,
        props.level === 2 && styles.h2,
        props.level === 3 && styles.h3,
        props.level === 4 && styles.h4,
        props.level === 5 && styles.h5,
      ]}
    >
      {props.children}
    </Tag>
  )
}

export default Header
