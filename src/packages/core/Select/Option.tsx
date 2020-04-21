import React from 'react'
import Checkbox from '../Checkbox'

interface IProps {
  disabled?: boolean
  onChange?: (e: any) => any
  key?: string | number | undefined
  name?: string
  child?: boolean
  checked?: boolean
}

const Option: React.FC<IProps> = props => {
  return (
    <div key={props.key}>
      <Checkbox
        disabled={props.disabled}
        onChange={props.onChange}
        name={props.name}
        child={props.child}
        checked={props.checked}
      >
        {React.Children.map(props.children, child => {
          if (!child) {
            return null
          }

          return child
        })}
      </Checkbox>
    </div>
  )
}

export default Option
