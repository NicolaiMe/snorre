/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { wrapper, Content } from './styles'

const Footer: React.FC = props => {
  return (
    <div css={theme => [wrapper(theme)]}>
      <Content>{props.children}</Content>
    </div>
  )
}

export default Footer
