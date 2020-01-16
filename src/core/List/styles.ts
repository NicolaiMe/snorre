import themeColors from '../../globals/styles/colors';


const styles = {
    default: {
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
    },
    points: {
        "& > li": {
            display: 'flex',
            alignItems: 'center',
            height: '30px',
            borderTop: 'none',
            paddingLeft: '30px'
        },
    
        "& > li::before": {
            content: '""',
            height: '8px',
            width: '8px',
            borderRadius: '50%',
            backgroundColor: themeColors.primary,
            marginLeft: '-20px',
            marginRight: '10px;'
        }
    },
    links: {

    },
    ordered: {

    },
    numbers: {
        listStyle: 'none',
        counterReset: 'conts',

        "& > li": {
            height: '30px',
            borderTop: 'none',
            paddingLeft: '30px',
            counterIncrement: 'conts'
        },

        "& > li::before": {
            content: 'counter(conts)"."',
            fontSize: '16px',
            fontWeight: 'bold',
            marginLeft: '-20px',
            marginRight: '10px;'
        }
    },
    numbersHighlighted: {
        listStyle: 'none',
        counterReset: 'conts',

        "& > li": {
            height: '40px',
            borderTop: 'none',
            paddingLeft: '30px',
            counterIncrement: 'conts',
            fontWeight: '600'
        },

        "& > li::before": {
            content: 'counter(conts)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: themeColors.primary,
            borderRadius: '50%',
            height: '24px',
            width: '24px',
            color: 'white',
            fontSize: '16px',
            fontWeight: '600',
            marginLeft: '-20px',
            marginRight: '10px;'
        }
    },
    connected: {}
}


export default styles;

export { styles };