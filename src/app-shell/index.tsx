import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import styled from '@emotion/styled'

const Wrapper = styled.div<any>`
  min-height: 100vh;
  width: auto;
  background-color: ${props => props.theme.bg};
`

export interface IAppTheme {
  primary: string
  secondary: string
  bg: string
}

interface IProps {
  theme: IAppTheme
  children: NonNullable<React.ReactNode>
}

const AppShell: React.FC<IProps> = props => {
  return (
    <ThemeProvider theme={props.theme}>
      <Wrapper>{props.children}</Wrapper>
    </ThemeProvider>
  )
}

export default AppShell
