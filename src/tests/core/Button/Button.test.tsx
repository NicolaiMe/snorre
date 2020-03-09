import React from 'react'
import Button from '../../../packages/core/Button'
import { render } from 'enzyme'

it('button with different props', () => {
  const wrapper = render(<Button>Button test</Button>)
  expect(wrapper.text()).toBe('Button test')

  const wrapperInfo = render(<Button>Alert info</Button>)
  expect(wrapperInfo.text()).toBe('Alert info')

  const wrapperDanger = render(<Button>Alert danger</Button>)
  expect(wrapperDanger.text()).toBe('Alert danger')

  const wrapperSuccess = render(<Button>Alert success</Button>)
  expect(wrapperSuccess.text()).toBe('Alert success')
})
