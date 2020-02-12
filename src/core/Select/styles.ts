import { css } from '@emotion/core'
import { IAppTheme } from '../../app-shell/theme'

const styles = {
  default: (theme: IAppTheme) => css`
    position: absolute;
    z-index: 1000;
    width: 175px;
    border-radius: 10px;
    border: 1px solid ${theme.border};
    background-color: #ffffff;
    box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.1);
    margin-top: 8px;

    div {
      padding: 10px 16px;
      &:hover {
        background-color: ${theme.bgLight};
        &:nth-of-type(1) {
          border-radius: 10px 10px 0 0;
        }
        &:last-child {
          border-radius: 0 0 10px 10px;
        }
      }
      label {
        width: 100%;
      }
    }
  `,
}

export default styles

export { styles }
