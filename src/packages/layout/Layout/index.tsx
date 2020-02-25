/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Wrapper } from './styles'

interface IProps {
  background?: boolean
}

const Layout: React.FC<IProps> = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Layout
