import { css } from '@emotion/core'
import { IAppTheme } from '../../app-shell/theme'

export const SvgTheme = (theme: IAppTheme) => css`
  width: 100%;

  & > svg {
    height: 100%;
  }

  & > svg .svg-theme-bg {
    fill: ${theme.backgroundColor};
  }
  & > svg .svg-theme-bg-overlay {
    fill: ${theme.primary};
    opacity: 0.2;
  }

  & > svg .fill-secondary {
    fill: ${theme.secondary};
  }

  & > svg .fill-primary {
    fill: ${theme.primary};
  }

  & > svg .fill-white {
    fill: #ffffff;
  }
`

export const withoutBackground = css`
  & > svg .svg-theme-bg {
    fill: transparent;
  }
  & > svg .svg-theme-bg-overlay {
    fill: transparent;
  }
`
