import { css } from '@emotion/core'
import { IAppTheme } from '../../app-shell/theme'

const styles = {
  default: (theme: IAppTheme) => css`
    display: inline-block;
    position: relative;
    padding-left: 25px;
    margin-right: 60px;
    font-size: 14px;
    user-select: none;
    cursor: pointer;
    input {
      display: none;
      &:checked ~ span {
        background-color: ${theme.primary};
        border-color: ${theme.primary};
      }
      &:checked ~ span:after {
        display: block;
      }
    }
    span {
      position: absolute;
      top: 0;
      left: 0;
      height: 14px;
      width: 14px;
      border: 2px solid ${theme.border};
      border-radius: 3px;
      cursor: pointer;
      &:after {
        content: '';
        position: absolute;
        display: none;
        left: 5px;
        top: 0;
        width: 4px;
        height: 9px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }
  `,
  nomargin: css`
    margin-right: 0;
  `,
  child: css`
    padding-left: 41px;
    span {
      left: 16px;
    }
  `,
  vertical: css`
    display: block;
    margin-right: 0;
    margin-bottom: 15px;
  `,
  disabled: (theme: IAppTheme) => css`
    color: ${theme.subtleText};
    cursor: not-allowed;
    span {
      opacity: 0.7;
      cursor: not-allowed;
    }
  `,
}

export default styles

export { styles }
