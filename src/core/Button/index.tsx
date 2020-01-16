/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { styles } from './styles';

export interface IProps {
    success?: boolean;
    danger?: boolean;
    disabled?: boolean;
    highlight?: boolean;
    outline?: boolean;
}

const Button: React.FC<IProps> = (props) => {
    return (
        <button
            css={[
                styles.default,
                props.success && styles.success,
                props.danger && styles.danger,
                props.highlight && styles.highlighted,
                props.disabled && styles.disabled,
                props.outline && styles.outline
            ]}
            {...props}>
            {props.children}
        </button>
    );
}

export default Button;