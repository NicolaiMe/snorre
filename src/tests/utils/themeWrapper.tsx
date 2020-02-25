import React, { ReactElement } from 'react'
import { shallow, mount } from 'enzyme'
import { ThemeProvider } from 'emotion-theming'
import { initTheme } from '../../packages/app-shell/theme'

const theme = initTheme('#1657E2', '#10105A')

//
//  TODO add arguments and parameter if needes
//

export function shallowWithTheme(node: ReactElement) {
  console.log(node)
  return shallow(<ThemeProvider theme={theme}>{node}</ThemeProvider>)
}

export function mountWithTheme(children: any) {
  return mount(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
}
