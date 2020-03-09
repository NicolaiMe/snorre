import styled from '@emotion/styled'
import { IAppTheme } from '../../app-shell/theme'
import { css } from '@emotion/core'
import bp from '../../globals/styles/breakpoints'

export const wrapper = (theme: IAppTheme) => css`
  background-color: ${theme.primary5darker};
  width: 100%;
  padding: 40px 0;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1170px;
  margin: 0 auto;

  @media screen and (max-width: ${bp.small}) {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 2em;
    padding: 0 1em;

    & > div {
      height: unset;
    }
  }
`
