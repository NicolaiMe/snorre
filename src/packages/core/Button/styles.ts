import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { IAppTheme } from '../../app-shell/theme'

export const Btn = styled.button<any>``

const styles = {
  default: (theme: IAppTheme) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 38px;
    padding: 0 1.5em;
    border-radius: 19px;
    background-color: ${theme.btnDefault};
    border: 1px solid ${theme.btnDefault};
    color: ${theme.btnDefaultFontColor};
    text-align: center;
    line-height: 20px;
    font-size: 14px;
    font-weight: 600;
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
      color: ${theme.btnHoverTextColor};
    }
  `,
  highlighted: css`
    height: 46px;
    font-size: 16px;
    line-height: 22px;
    border-radius: 23px;
  `,
  icon: (theme: IAppTheme) => css`
    display: inline-flex;
    justify-content: space-between;

    & > svg > polygon {
      fill: ${theme.btnDefaultFontColor};
    }
  `,
  beforeIcon: css`
    padding-left: 0.75em;

    & > svg {
      margin-right: 5px;
    }
  `,
  afterIcon: css`
    padding-right: 0.75em;

    & > svg {
      margin-left: 5px;
    }
  `,
  outline: (theme: IAppTheme) => css`
    border: 2px solid ${theme.btnDefault};
    color: black;
    background-color: white;

    & > svg > polygon {
      fill: black !important; // TODO: Find fix
    }

    &:hover {
      & > svg > polygon {
        fill: ${theme.btnHoverTextColor} !important; // TODO: Find fix
      }
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
    color: black;
    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
      border: none;
      color: black;
    }
  `,
}

export default styles

export { styles }
