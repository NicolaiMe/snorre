import themeColors from '../../globals/styles/colors'
import { css } from '@emotion/core'

const styles = {
  default: css({
    fontWeight: 'bold',
    margin: '0',
  }),
  h1: css({
    fontSize: '40px',
    fontWeight: 'bold',
    color: themeColors.defaultText,
    margin: '0',
  }),
  h2: css({
    fontSize: '32px',
  }),
  h3: css({
    fontSize: '24px',
  }),
  h4: css({
    fontSize: '22px',
  }),
  h5: css({
    fontSize: '18px',
  }),
}

export default styles

export { styles }
