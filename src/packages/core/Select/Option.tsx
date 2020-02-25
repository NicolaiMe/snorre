import React from 'react'
import Checkbox from '../Checkbox'

interface IProps {
  disabled?: boolean
  onChange?: () => any
}

const Option: React.FC<IProps> = props => {
  return (
    <div>
      <Checkbox disabled={props.disabled} onChange={props.onChange}>
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
