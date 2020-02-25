/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { FooterLabelSpan } from './styles'

interface IProps {}

const FooterLabel: React.FC<IProps> = props => {
  return <FooterLabelSpan>{props.children}</FooterLabelSpan>
}

export default FooterLabel
