import { css } from '@emotion/core'
import { IAppTheme } from '../../app-shell/theme'

const styles = {
  default: (theme: IAppTheme, color: string | undefined) =>
    css({
      fontSize: '16px',
      color: color ? color : theme.defaultText,
    }),
  paragraph: css({
    margin: '0',
  }),
  intro: css({
    fontSize: '22px',
  }),
  small: css({
    fontSize: '14px',
  }),
  extrasmall: css({
    fontSize: '12px',
  }),
  bold: css({
    fontWeight: 'bold',
  }),
  semiBold: css({
    fontWeight: 600,
  }),
  subtle: (theme: IAppTheme) =>
    css({
      color: theme.subtleText,
    }),
}

export default styles

export { styles }
