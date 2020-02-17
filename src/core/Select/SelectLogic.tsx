/** @jsx jsx */
import React, { useState, ReactNodeArray } from 'react'
import { jsx } from '@emotion/core'
import { styles } from './styles'
import Checkbox from '../Checkbox'
import Button from '../Button'
import IconCaretDown from '../../icons/General/IconCaretDown'

interface IProps {
  onClick?: () => any
  onChange?: (value: boolean) => any
  multiSelect?: boolean
  content: ReactNodeArray
}

const SelectLogic: React.FC<IProps> = props => {
  const [open, toggleOpen] = useState(false)
  const onClick = function() {
    toggleOpen(!open)
  }
  const allBtn = props.multiSelect ? (
    <div>
      <Checkbox>Alle</Checkbox>
    </div>
  ) : null

  const select = open ? (
    <div css={theme => styles.default(theme)}>
      {allBtn}
      {props.content}
    </div>
  ) : null

  return (
    <span>
      <Button icon onClick={onClick}>
        - Velg
        <IconCaretDown flipVertical={open} />
      </Button>
      {select}
    </span>
  )
}

export default SelectLogic
