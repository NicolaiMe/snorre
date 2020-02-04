import { css } from '@emotion/core'
import { IAppTheme } from '../../app-shell/theme'

const styles = {
  default: (theme: IAppTheme) =>
    css({
      display: 'inline-block',
      height: '20px',
      padding: '0px 8px',

      outline: 'none',
      border: 'none',
      borderRadius: '12px',

      fontSize: '14px',
      color: 'white',
      backgroundColor: theme.primary,

      '& > span': {
        paddingLeft: '5px',
      },
    }),
  neutral: (theme: IAppTheme) =>
    css({
      color: theme.defaultText,
      backgroundColor: theme.gray20,
    }),
  success: (theme: IAppTheme) =>
    css({
      color: theme.defaultText,
      backgroundColor: theme.mediumSuccess,
    }),
  info: (theme: IAppTheme) =>
    css({
      color: theme.bgDark,
      backgroundColor: theme.mediumInfo,
    }),
  danger: (theme: IAppTheme) =>
    css({
      color: 'white',
      backgroundColor: theme.alert,
    }),
  dark: (theme: IAppTheme) =>
    css({
      color: 'white',
      backgroundColor: theme.bgDark,
    }),
  light: (theme: IAppTheme) =>
    css({
      color: theme.bgDark,
      backgroundColor: theme.bgLight,
    }),
  withclose: css({
    height: '24px',
  }),
}

export default styles

export { styles }
