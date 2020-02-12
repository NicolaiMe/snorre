/** @jsx jsx */
import React, { useState, ReactNodeArray, ReactElement } from 'react'
import { jsx } from '@emotion/core'
import { styles } from './styles'
import Option from './Option'
import Checkbox from '../Checkbox'
import Button from '../Button'
import IconCaretDown from '../../icons/General/IconCaretDown'
import IconCaretUp from '../../icons/General/IconCaretUp'

export { Option }

interface IProps {
  onClick?: () => any
  onChange?: (value: boolean) => any
  multiSelect?: boolean
  children: ReactNodeArray
}

const Select: React.FC<IProps> = props => {
  const [open, toggleOpen] = useState(false)
  const onClick = function() {
    toggleOpen(!open)
  }
  const allBtn = props.multiSelect ? (
    <div>
      <Checkbox>Alle</Checkbox>
    </div>
  ) : null

  const onChange = (value: boolean) => {
    toggleOpen(props.multiSelect ? true : false)
    if (props.onChange) {
      props.onChange(value)
    }
  }

  const select = open ? (
    <div css={theme => styles.default(theme)}>
      {allBtn}
      {props.children.map((child, key) => {
        if (!child) {
          return null
        }
        return React.cloneElement(child as ReactElement, {
          onChange: onChange,
          key,
        })
      })}
    </div>
  ) : null

  const icon = open ? <IconCaretUp /> : <IconCaretDown />

  return (
    <span>
      <Button icon onClick={onClick}>
        - Velg
        {icon}
      </Button>
      {select}
    </span>
  )
}

export default Select
