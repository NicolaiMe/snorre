import { css } from '@emotion/core'
import { IAppTheme } from '../../app-shell/theme'

const styles = {
  default: (theme: IAppTheme) =>
    css`
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      font-size: 14px;
      background-color: ${theme.bgLight};
      border: 1px solid ${theme.bgMedium};
      color: ${theme.bgDark};
      padding: 0 16px;
      padding-right: 32px;

      & > svg polygon {
        fill: ${theme.bgDark};
      }
    `,
  success: (theme: IAppTheme) =>
    css`
      background-color: ${theme.lightSuccess};
      color: ${theme.defaultText};
      border-color: ${theme.borderSuccess};

      & > svg polygon {
        fill: ${theme.bgDark};
      }
    `,
  danger: (theme: IAppTheme) =>
    css`
      background-color: ${theme.lightInfo};
      color: ${theme.defaultText};
      border-color: ${theme.borderInfo};

      & > svg polygon {
        fill: ${theme.defaultText};
      }
    `,
  info: (theme: IAppTheme) =>
    css`
      background-color: ${theme.lightAlert};
      color: ${theme.defaultText};
      border-color: ${theme.borderAlert};

      & > svg polygon {
        fill: ${theme.defaultText};
      }
    `,
}

export default styles

export { styles }
