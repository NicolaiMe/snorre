import React from 'react'
import styled from '@emotion/styled/macro'

const Text: React.FC<IProps> = styled.span`
        font-weight: ${props => props.bold ? 'bold' : (props.intro || props.semiBold ? '600' : 'normal')};
        font-size: ${props => props.intro ? '22px' : (props.small ? '14px' : '16px')};
`

interface IProps {
    intro?: boolean;
    small?: boolean;
    bold?: boolean;
    semiBold?: boolean;
}

export default Text;