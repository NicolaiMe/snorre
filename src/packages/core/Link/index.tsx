/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import ButtonOrLink, {
  Props as ButtonOrLinkProps,
} from '../private/ButtonOrLink'

type IProps = ButtonOrLinkProps & {}

const Link: React.FC<IProps> = props => {
  const { disabled, children, ...restProps } = props
  return (
    <ButtonOrLink {...restProps} disabled={disabled}>
      {children}
    </ButtonOrLink>
  )
}

export default Link
