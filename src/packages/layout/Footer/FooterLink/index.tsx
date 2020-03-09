/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { FooterLinkA, FooterLinkASmall } from './styles'

interface IProps {
  small?: boolean
  children: NonNullable<React.ReactNode>
  href: string
}

const FooterLink: React.FC<IProps> = props => {
  const Tag = props.small ? FooterLinkASmall : FooterLinkA
  return <Tag href={props.href}>{props.children}</Tag>
}

export default FooterLink
