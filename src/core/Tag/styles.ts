import themeColors from '../../globals/styles/colors'
import { css } from '@emotion/core'

const styles = {
  default: css({
    display: 'inline-block',
    height: '20px',
    padding: '0px 8px',

    outline: 'none',
    border: 'none',
    borderRadius: '12px',

    fontSize: '14px',
    fontWeight: 600,
    color: 'white',
    backgroundColor: themeColors.primary,

    '& > span': {
      paddingLeft: '5px',
    },
  }),
  neutral: css({
    color: themeColors.defaultText,
    backgroundColor: themeColors.gray20,
  }),
  success: css({
    color: themeColors.defaultText,
    backgroundColor: themeColors.mediumSuccess,
  }),
  info: css({
    color: themeColors.bgDark,
    backgroundColor: themeColors.mediumInfo,
  }),
  danger: css({
    color: 'white',
    backgroundColor: themeColors.alert,
  }),
  dark: css({
    color: 'white',
    backgroundColor: themeColors.bgDark,
  }),
  light: css({
    color: themeColors.bgDark,
    backgroundColor: themeColors.bgLight,
  }),
}

export default styles

export { styles }
