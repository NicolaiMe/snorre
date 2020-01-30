import themeColors from '../../globals/styles/colors'
import { css } from '@emotion/core'

const styles = {
  default: css({
    display: 'grid',
    ':focus-within span': {
      color: themeColors.primary,
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
        borderColor: themeColors.primary,
      },
      ':disabled': {
        backgroundColor: themeColors.disabled,
      },
    },
    'input:focus + label': {
      color: themeColors.primary,
    },
  }),
  highligted: css({
    fontSize: '20px',
    input: {
      height: '50px',
      fontSize: '18px',
    },
  }),
  text: css({
    border: '2px solid ' + themeColors.border,
    borderRadius: '3px',
    paddingLeft: '10px',
  }),
  password: css({
    border: '2px solid ' + themeColors.border,
    borderRadius: '3px',
    paddingLeft: '10px',
  }),
  search: css({
    border: '0',
    borderBottom: '2px solid ' + themeColors.border,
    paddingLeft: '0',
  }),
  disabled: css({
    cursor: 'not-allowed',
    backgroundColor: themeColors.disabled,
    borderColor: themeColors.disabled,
  }),
  focused: css({
    borderColor: themeColors.primary,
  }),
  focusedLabel: css({
    color: themeColors.primary,
  }),
}

export default styles

export { styles }
