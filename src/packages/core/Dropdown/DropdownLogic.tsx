/** @jsx jsx */
import React, { useState, ReactNodeArray, useEffect, createRef } from 'react'
import { jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { styles } from './styles'
import Checkbox from '../Checkbox'
import Button from '../Button'
import IconCaretDown from '../../icons/General/IconCaretDown'

interface IProps {
  label?: string
  onClick?: () => any
  onChange?: (value: boolean) => any
  multiSelect?: boolean
  content: ReactNodeArray
}

const DropdownLogic: React.FC<IProps> = props => {
  const ref = createRef<HTMLSpanElement>()
  const [open, toggleOpen] = useState(false)
  const theme: any = useTheme()
  const onClick = function() {
    toggleOpen(!open)
  }

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      // TODO type
      const node = ref.current
      if (node && node.contains(e.target)) {
        return
      }
      toggleOpen(false)
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open, ref])

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
    <span ref={ref}>
      <Button
        outline
        afterIcon={<IconCaretDown flipVertical={open} />}
        border={open ? theme.primary : null}
        onClick={onClick}
      >
        {props.label ? props.label : '- Velg'}
      </Button>
      {select}
    </span>
  )
}

export default DropdownLogic
