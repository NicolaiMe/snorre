import { css } from '@emotion/core'
import { IAppTheme } from '../../app-shell/theme'

const styles = {
  default: (theme: IAppTheme) =>
    css({
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: '50px',
      fontSize: '14px',
      backgroundColor: theme.bgLight,
      border: '1px solid ' + theme.bgMedium,
      color: theme.bgDark,
      padding: '0 16px',
      paddingRight: '32px',
    }),
  success: (theme: IAppTheme) =>
    css({
      backgroundColor: theme.lightSuccess,
      color: theme.defaultText,
      borderColor: theme.borderSuccess,
    }),
  danger: (theme: IAppTheme) =>
    css({
      backgroundColor: theme.lightInfo,
      color: theme.defaultText,
      borderColor: theme.borderInfo,
    }),
  info: (theme: IAppTheme) =>
    css({
      backgroundColor: theme.lightAlert,
      color: theme.defaultText,
      borderColor: theme.borderAlert,
    }),
}

export default styles

export { styles }
