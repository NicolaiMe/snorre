/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'

interface IProps {
  className?: string
}

const Divider: React.FC<IProps> = props => {
  return (
    <hr
      className={props.className}
      css={css`
        height: 1px;
        background-color: #cfd9ea;
        border: none;
        margin: 1em 0;
      `}
    />
  )
}

export default Divider
