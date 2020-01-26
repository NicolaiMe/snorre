import { css } from '@emotion/core'
import themeColors from '../../globals/styles/colors'

const styles = {
  default: css({
    fontSize: '16px',
  }),
  intro: css({
    fontSize: '22px',
  }),
  small: css({
    fontSize: '14px',
  }),
  bold: css({
    fontWeight: 'bold',
  }),
  semiBold: css({
    fontWeight: 600,
  }),
  subtle: css({
    color: themeColors.subtleText,
  }),
}

export default styles

export { styles }
