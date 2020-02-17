import { css } from '@emotion/core'
import { IAppTheme } from '../../app-shell/theme'

const styles = {
  default: (theme: IAppTheme) => css`
    display: inline-block;
    position: relative;
    padding-left: 25px;
    margin-right: 60px;
    cursor: pointer;
    user-select: none;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;

      &:checked ~ span:after {
        display: block;
      }
    }

    span {
      position: absolute;
      top: 0;
      left: 0;
      height: 16px;
      width: 16px;
      border: 2px solid ${theme.border};
      border-radius: 50%;

      &:after {
        content: '';
        position: absolute;
        display: none;
        top: 4px;
        left: 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${theme.primary};
      }
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
    input {
      cursor: not-allowed;
    }
  `,
}

export default styles

export { styles }
