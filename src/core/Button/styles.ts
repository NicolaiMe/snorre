import themeColors from '../../globals/styles/colors';
import { css } from '@emotion/core';

const styles = {
    default: css({
        height: '32px',
        padding: '0 24px',
        borderRadius: '16px',
        backgroundColor: themeColors.btnDefault,
        border: '1px solid ' + themeColors.btnDefault,
        color: 'white',
        verticalAlign: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        ":focus": {
            textDecoration: 'underline',
            backgroundColor: themeColors.btnDefaultLighter,
            borderColor: themeColors.btnDefaultLighter,
            outline: 'none'
        },
        ":hover": {
            backgroundColor: themeColors.btnDefaultDarker,
            borderColor: themeColors.btnDefaultDarker
        }
    }),
    highlighted: css({
        height: '50px;',
        fontSize: '18px',
        borderRadius: '25px'
    }),
    outline: css({
        border: '2px solid ' + themeColors.btnDefault,
        color: themeColors.btnDefault,
        backgroundColor: 'white'
    }),
    success: css({
        backgroundColor: themeColors.success,
        borderColor: themeColors.success,
        color: 'white',
        ":focus": {
            textDecoration: 'underline',
            backgroundColor: themeColors.btnSuccessLighter,
            borderColor: themeColors.btnSuccessLighter
        },
        ":hover": {
            backgroundColor: themeColors.btnSuccessDarker,
            borderColor: themeColors.btnSuccessDarker
        }
    }),
    danger: css({
        backgroundColor: themeColors.alert,
        borderColor: themeColors.alert,
        color: 'white',
        ":focus": {
            textDecoration: 'underline',
            backgroundColor: themeColors.btnDangerLighter,
            borderColor: themeColors.btnDangerLighter
        },
        ":hover": {
            backgroundColor: themeColors.btnDangerDarker,
            borderColor: themeColors.btnDangerDarker
        }
    }),
    disabled: css({
        backgroundColor: themeColors.disabled,
        borderColor: themeColors.disabled,
    })
}

export default styles;

export { styles };
