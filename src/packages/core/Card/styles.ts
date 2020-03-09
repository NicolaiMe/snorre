import { css } from '@emotion/core'
import { IAppTheme } from '../../app-shell/theme'

const styles = {
  default: css`
    position: relative;
    padding: 30px 20px;
    border-radius: 30px;
    background-color: #ffffff;
    overflow: hidden;
  `,
  withHeader: css`
    padding: 0;
    padding-bottom: 30px;
  `,
  withHover: (theme: IAppTheme) => css`
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #ffffff;
      box-shadow: ${theme.shadowBig};
    }
  `,
  shadow: (theme: IAppTheme) => css`
    box-shadow: ${theme.shadowSmall};
  `,
  primary: (theme: IAppTheme) => css`
    background-color: ${theme.primary};
  `,
  gray: css`
    background-color: rgba(0, 0, 0, 0.03);
  `,
  noPadding: css`
    padding: 0;
  `,
  largePadding: css`
    padding: 2em;
  `,
  nobackground: css`
    background: transparent;
  `,
  height: (height: number) => css`
    height: ${height}px;
  `,
}

export default styles

export { styles }
