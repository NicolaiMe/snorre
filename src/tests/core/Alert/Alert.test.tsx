import React from 'react'
import Alert from '../../../packages/core/Alert'
import { render } from 'enzyme'

it('alerts in different states', () => {
  const wrapper = render(<Alert>Alert text</Alert>)
  expect(wrapper.text()).toBe('Alert text')

  const wrapperInfo = render(<Alert info>Alert info</Alert>)
  expect(wrapperInfo.text()).toBe('Alert info')

  const wrapperDanger = render(<Alert danger>Alert danger</Alert>)
  expect(wrapperDanger.text()).toBe('Alert danger')

  const wrapperSuccess = render(<Alert success>Alert success</Alert>)
  expect(wrapperSuccess.text()).toBe('Alert success')
})
