/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { styles } from './styles'
import { IconClose, Button } from '../..'

interface IProps {
  success?: boolean
  danger?: boolean
  info?: boolean
  onClose?: () => void
}

const Alert: React.FC<IProps> = props => {
  return (
    <div
      css={theme => [
        styles.default(theme),
        props.success && styles.success(theme),
        props.info && styles.info(theme),
        props.danger && styles.danger(theme),
      ]}
    >
      {props.children}

      <Button onClick={props.onClose} nostyle>
        <IconClose size={14}></IconClose>
      </Button>
    </div>
  )
}

export default Alert
