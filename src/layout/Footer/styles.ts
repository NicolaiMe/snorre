import styled from '@emotion/styled'
import { IAppTheme } from '../../app-shell/theme'
import { css } from '@emotion/core'

export const wrapper = (theme: IAppTheme) => css`
  background-color: ${theme.primary5darker};
  width: 100%;
  padding: 80px 0;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
`
