/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import IconUser from './User'
import { IconTheme } from './styles'

interface IProps {}

const Icon: React.FC<IProps> = props => {
  return (
    <div css={theme => [IconTheme(theme)]}>
      <IconUser />
    </div>
  )
}

export default Icon
