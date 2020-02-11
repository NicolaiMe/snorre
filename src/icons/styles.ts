import { css } from '@emotion/core'
import { IAppTheme } from '../../app-shell/theme'

export const IconTheme = (theme: IAppTheme) => css`
  width: 100%;

  & > svg .fill-primary {
    fill: ${theme.primary};
  }

  & > svg .fill-secondary {
    fill: ${theme.secondary};
  }
`
