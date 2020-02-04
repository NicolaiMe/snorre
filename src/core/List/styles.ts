import { css } from '@emotion/core'
import { IAppTheme } from '../../app-shell/theme'

const styles = {
  default: (theme: IAppTheme) =>
    css({
      padding: 0,
      margin: 0,
      listStyle: 'none',
      '& > li': {
        display: 'flex',
        alignItems: 'center',
        height: '36px',
        fontSize: '16px',
        borderTop: '1px solid ' + theme.border,

        '&:nth-of-type(1)': {
          borderTop: 'none',
        },
      },
    }),
  points: (theme: IAppTheme) =>
    css({
      '& > li': {
        display: 'flex',
        alignItems: 'center',
        height: '30px',
        borderTop: 'none',
        paddingLeft: '30px',
      },

      '& > li::before': {
        content: '""',
        height: '8px',
        width: '8px',
        borderRadius: '50%',
        backgroundColor: theme.primary,
        marginLeft: '-20px',
        marginRight: '10px;',
      },
    }),
  links: {},
  ordered: {},
  numbers: {
    listStyle: 'none',
    counterReset: 'conts',

    '& > li': {
      height: '30px',
      borderTop: 'none',
      paddingLeft: '30px',
      counterIncrement: 'conts',
    },

    '& > li::before': {
      content: 'counter(conts)"."',
      fontSize: '16px',
      fontWeight: 'normal',
      marginLeft: '-20px',
      marginRight: '10px;',
    },
  },
  numbersHighlighted: (theme: IAppTheme) =>
    css({
      listStyle: 'none',
      counterReset: 'conts',
      '& > li': {
        height: '40px',
        borderTop: 'none',
        paddingLeft: '30px',
        counterIncrement: 'conts',
        fontWeight: 600,
      },
      '& > li::before': {
        content: 'counter(conts)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.primary,
        borderRadius: '50%',
        height: '24px',
        width: '24px',
        color: 'white',
        fontSize: '16px',
        fontWeight: 600,
        marginLeft: '-20px',
        marginRight: '10px',
      },
    }),
  connected: {},
}

export default styles

export { styles }
