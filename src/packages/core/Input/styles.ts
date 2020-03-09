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
        width: '100%',
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
  highligted: css`
    font-size: 18px;
    & input {
      height: 50px;
      font-size: 16px;
    }
    & input[type='search'] {
      height: 60px;
      font-size: 16px;
      border-radius: 5px;
      box-shadow: 0 2px 4px 0 rgba(9, 28, 68, 0.1);
      border-bottom: 0;
      padding: 0 16px;
    }
  `,
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
    css`
      border: 0;
      border-bottom: 2px solid ${theme.border};
      padding-left: 0;
      &::-webkit-search-decoration,
      &::-webkit-search-cancel-button,
      &::-webkit-search-results-button,
      &::-webkit-search-results-decoration {
        -webkit-appearance: none;
      }
    `,
  file: css``,
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
