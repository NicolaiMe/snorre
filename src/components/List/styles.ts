import themeColors from '../../globals/styles/colors';
import { css } from '@emotion/core';


const styles = {
    default: css({
        padding: 0,
        margin: 0,
        listStyle: 'none',
        "& > li": {
            display: 'flex',
            alignItems: 'center',
            height: '36px',
            fontSize: '14px',
            borderTop: '1px solid ' + themeColors.border,
    
            "&:nth-of-type(1)": {
                borderTop: 'none'
            }
        }
    }),
    points: css({
        "& > li": {
            display: 'flex',
            alignItems: 'center',
            height: '30px',
            borderTop: 'none',
            paddingLeft: '30px'
        },
    
        "& > li::before": {
            content: '""',
            height: '3px',
            width: '3px',
            backgroundColor: themeColors.primary,
            marginLeft: '-20px',
            marginRight: '10px;'
        }
    }),
    links: {

    },
    ordered: {

    },
    numbers: {

    },
    numbersHighlighted: {

    },
    connected: {}
}


export default styles;

export { styles };