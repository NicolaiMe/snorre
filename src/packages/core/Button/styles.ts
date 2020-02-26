import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { IAppTheme } from '../../app-shell/theme'

export const Btn = styled.button<any>``

const styles = {
  default: (theme: IAppTheme) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    padding: 0 1.5em;
    border-radius: 18px;
    background-color: ${theme.btnDefault};
    border: 1px solid ${theme.btnDefault};
    color: ${theme.btnDefaultFontColor};
    text-align: center;
    font-size: 14px;
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
  icon: (theme: IAppTheme) => css`
    display: inline-flex;
    justify-content: space-between;

    height: 32px;
    line-height: 28px;
    padding-left: 0.75em;
    padding-right: 0.25em;

    border: 2px solid ${theme.btnDisabled};

    color: black;
    background-color: transparent;

    &:hover {
      background-color: transparent;
      border: 2px solid ${theme.btnDefault};
    }
    &:focus {
      background-color: transparent;
      border-color: ${theme.btnDefault};
      outline: none;
      text-decoration: none;
    }
  `,
  left: css`
    padding-right: 0.75em;
    padding-left: 0.25em;
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
  border: (color: string) => css`
    border-color: ${color};
  `,
  nostyle: css`
    padding: 0;
    outline: none;
    border: none;
    background-color: transparent;
    height: auto;
    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
      border: none;
    }
  `,
}

export default styles

export { styles }
