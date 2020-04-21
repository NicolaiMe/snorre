/** @jsx jsx */
import React, { ReactNodeArray, ReactElement } from 'react'
import { jsx } from '@emotion/core'
import SelectLogic from './SelectLogic'
import Option from './Option'

export { Option }

interface IProps {
  label?: string
  onClick?: () => any
  onChange?: (value: boolean) => any
  multiSelect?: boolean
  children: ReactNodeArray
}

const Select: React.FC<IProps> = props => {
  const onChange = (value: boolean) => {
    if (props.onChange) {
      props.onChange(value)
    }
  }

  return (
    <SelectLogic
      label={props.label}
      multiSelect={props.multiSelect}
      content={props.children
        .filter(x => x)
        .map((child, key) => {
          if (!child) {
            return null
          }
          return React.cloneElement(child as ReactElement, {
            onChange: onChange,
            key,
          })
        })}
    ></SelectLogic>
  )
}

export default Select
