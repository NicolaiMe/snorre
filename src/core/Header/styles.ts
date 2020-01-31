import themeColors from '../../globals/styles/colors'
import { css } from '@emotion/core'
import bp from '../../globals/styles/breakpoints'

const styles = {
  default: css({
    fontWeight: 'bold',
    margin: '0',
  }),
  h1: css`
    font-size: '40px',
    font-weight: 'bold',
    color: ${themeColors.defaultText},
    margin: '0',
    @media screen and (min-width: ${bp.small}) {
        font-size: '31px'

    }
  `,
  h2: css`
    font-size: '32px', @media screen and (min-width: ${bp.small}) {
      font-size: '22px';
    }
  `,
  h3: css`
    font-size: '24px', @media screen and (min-width: ${bp.small}) {
      font-size: '20px';
    }
  `,
  h4: css`
    font-size: '22px', @media screen and (min-width: ${bp.small}) {
      fontsize: '18px';
    }
  `,
  h5: css`
    font-size: '18px', @media screen and (min-width: ${bp.small}) {
      font-size: '16px';
    }
  `,
}

export default styles

export { styles }
