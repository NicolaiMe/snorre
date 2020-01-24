import themeColors from '../../globals/styles/colors'
import { css } from '@emotion/core'

const styles = {
  default: css({
    boxSizing: 'border-box',
    height: '36px',
    width: '340px',
    border: '2px solid ' + themeColors.primary,
    borderRadius: '3px',
  }),
}

export default styles

export { styles }
