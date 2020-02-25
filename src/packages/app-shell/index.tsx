import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import styled from '@emotion/styled'
import { IAppTheme, initTheme } from './theme'

const Wrapper = styled.div<any>`
  min-height: 100vh;
  width: auto;
  background-color: ${({ theme }) => theme.backgroundColor};
`

interface IProps {
  theme: {
    primary: string
    secondary: string
  }
  children: NonNullable<React.ReactNode>
}

const AppShell: React.FC<IProps> = ({ theme, children }) => {
  const appTheme: IAppTheme = initTheme(theme.primary, theme.secondary)

  return (
    <ThemeProvider theme={appTheme}>
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  )
}

export default AppShell
