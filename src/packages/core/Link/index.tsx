/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import ButtonOrLink, {
  Props as ButtonOrLinkProps,
} from '../private/ButtonOrLink'
import IconExternalLink from '../../icons/General/IconExternalLink'
import { IconLinkWrapper } from './styles'

type IProps = ButtonOrLinkProps & {
  external?: boolean
}

const Link: React.FC<IProps> = props => {
  const { disabled, children, ...restProps } = props
  return (
    <ButtonOrLink {...restProps} disabled={disabled}>
      {props.external ? (
        <IconLinkWrapper>
          <span>{children}</span>
          <IconExternalLink size="15px" color="blue" />
        </IconLinkWrapper>
      ) : (
        children
      )}
    </ButtonOrLink>
  )
}

export default Link
