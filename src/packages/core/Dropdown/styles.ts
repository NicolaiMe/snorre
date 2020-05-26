import { css } from '@emotion/core'
import { IAppTheme } from '../../app-shell/theme'

const styles = {
  default: (theme: IAppTheme) => css`
    position: absolute;
    z-index: 1000;
    width: 175px;
    border-radius: 10px;
    border: 1px solid ${theme.border};
    color: black;
    background-color: #ffffff;
    box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.1);
    margin-top: 8px;

    div {
      padding: 10px 16px;
      &:hover {
        &:nth-of-type(1) {
          border-radius: 10px 10px 0 0;
        }
        &:last-of-type {
          border-radius: 0 0 10px 10px;
        }
      }
      label {
        width: 100%;
      }
      button {
        color: black !important;
      }
    }
  `,
}

export default styles

export { styles }
