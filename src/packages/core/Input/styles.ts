import { css } from '@emotion/core'
import { IAppTheme } from '../../app-shell/theme'

const styles = {
  default: (theme: IAppTheme) =>
    css`
      display: grid;
      &:focus-within span {
        color: ${theme.primary};
      }
      span {
        line-height: 22px;
        font-size: 1em;
        font-weight: 600;
        margin-bottom: 4px;
      }
      input {
        height: 38px;
        width: calc(100% - 2em);
        font-size: 16px;
        line-height: 20px;
        outline: none;
        border-width: 1px;
        border-radius: 5px;
        padding: 0 1em;

        &:focus {
          border-color: ${theme.primary};
        }
        &:disabled: {
          background-color: ${theme.disabled};
        }
      }
    `,
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
    css`
      border: 2px solid ${theme.border};
      padding-eft: 10px;
    `,
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
  searchLabel: (theme: IAppTheme) => css`
    display: block;
    position: relative;

    & > input {
      width: 100%;
    }

    & > svg {
      position: absolute;
      right: 16px;
      top: calc(50% - 10px);
      fill: ${theme.primary} !important;
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
