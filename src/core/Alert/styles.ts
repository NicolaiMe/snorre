import themeColors from '../../globals/styles/colors'
import { css } from '@emotion/core'

const styles = {
  default: css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: '50px',
    fontSize: '14px',
    backgroundColor: themeColors.bgLight,
    border: '1px solid ' + themeColors.bgMedium,
    color: themeColors.bgDark,
    padding: '0 16px',
    paddingRight: '32px',
  }),
  success: css({
    backgroundColor: themeColors.lightSuccess,
    color: themeColors.defaultText,
    borderColor: themeColors.borderSuccess,
  }),
  danger: css({
    backgroundColor: themeColors.lightInfo,
    color: themeColors.defaultText,
    borderColor: themeColors.borderInfo,
  }),
  info: css({
    backgroundColor: themeColors.lightAlert,
    color: themeColors.defaultText,
    borderColor: themeColors.borderAlert,
  }),
}

export default styles

export { styles }
