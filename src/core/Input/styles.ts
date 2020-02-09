import { css } from '@emotion/core'
import { IAppTheme } from '../../app-shell/theme'

const styles = {
  default: (theme: IAppTheme) =>
    css({
      display: 'grid',
      ':focus-within span': {
        color: theme.primary,
      },
      span: {
        minHeight: '25px',
        fontWeight: 'bold',
      },
      input: {
        boxSizing: 'border-box',
        height: '36px',
        width: '340px',
        fontSize: '16px',
        outline: 'none',
        ':focus': {
          borderColor: theme.primary,
        },
        ':disabled': {
          backgroundColor: theme.disabled,
        },
      },
      'input:focus + label': {
        color: theme.primary,
      },
    }),
  highligted: css({
    fontSize: '20px',
    input: {
      height: '50px',
      fontSize: '18px',
    },
  }),
  text: (theme: IAppTheme) =>
    css({
      border: '2px solid ' + theme.border,
      borderRadius: '3px',
      paddingLeft: '10px',
    }),
  password: (theme: IAppTheme) =>
    css({
      border: '2px solid ' + theme.border,
      borderRadius: '3px',
      paddingLeft: '10px',
    }),
  search: (theme: IAppTheme) =>
    css({
      border: '0',
      borderBottom: '2px solid ' + theme.border,
      paddingLeft: '0',
    }),
  disabled: (theme: IAppTheme) =>
    css({
      cursor: 'not-allowed',
      backgroundColor: theme.disabled,
      borderColor: theme.disabled,
    }),
  focused: (theme: IAppTheme) =>
    css({
      borderColor: theme.primary,
    }),
  focusedLabel: (theme: IAppTheme) =>
    css({
      color: theme.primary,
    }),
  cardInput: css({
    borderRadius: '30px',
    padding: '0 20px',
    border: 'none',

    '&:focus': {
      boxShadow: '0 10px 20px 0 rgba(16, 16, 90, 0.1)',
    },
  }),
}

export default styles

export { styles }
