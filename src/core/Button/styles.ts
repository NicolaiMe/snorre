import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { IAppTheme } from '../../app-shell/theme'

export const Btn = styled.button<any>`,
`

const styles = {
  default: (theme: IAppTheme) => css`
    height: 36px;
    line-height: 36px;
    padding: 0 24px;
    border-radius: 16px;
    background-color: ${theme.btnDefault};
    border: 1px solid ${theme.btnDefault};
    color: ${theme.btnDefaultFontColor};
    vertical-align: center;
    text-align: center;
    cursor: pointer;
    &:focus {
      text-decoration: underline;
      background-color: ${theme.btnDefaultLighter};
      border-color: ${theme.btnDefaultLighter};
      outline: none;
    }
    &:hover {
      background-color: ${theme.btnDefaultDarker};
      border-color: ${theme.btnDefaultDarker};
    }
  `,
  highlighted: css`
    height: 50px;
    font-size: 18px;
    border-radius: 25px;
  `,
  outline: (theme: IAppTheme) => css`
    border: 2px solid ${theme.btnDefault};
    color: black;
    background-color: white;
    &:hover {
      color: white;
    }
  `,
  success: (theme: IAppTheme) => css`
    background-color: ${theme.btnSuccess};
    border-color: ${theme.btnSuccess};
    color: white;
    &:focus {
      text-decoration: underline;
      background-color: ${theme.btnSuccessLighter};
      border-color: ${theme.btnSuccessLighter};
    }
    &:hover {
      background-color: ${theme.btnSuccessDarker};
      border-color: ${theme.btnSuccessDarker};
    }
  `,
  danger: (theme: IAppTheme) => css`
    background-color: ${theme.btnDanger};
    border-color: ${theme.btnDanger};
    color: white;
    &:focus {
      text-decoration: underline;
      background-color: ${theme.btnDangerLighter};
      border-color: ${theme.btnDangerLighter};
    }
    &:hover {
      background-color: ${theme.btnDangerDarker};
      border-color: ${theme.btnDangerDarker};
    }
  `,
  disabled: (theme: IAppTheme) => css`
    background-color: ${theme.btnDisabled};
    border-color: ${theme.btnDisabled};
    color: black;
    &:hover {
      background-color: ${theme.btnDisabled};
      border-color: ${theme.btnDisabled};
      color: black;
      cursor: default;
    }
  `,
}

export default styles

export { styles }
