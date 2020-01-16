import React from 'react'
import styled from '@emotion/styled/macro'
import themeColors from '../../globals/styles/colors'


const Header1 = styled.h1({
        fontSize: '40px',
        fontWeight: 'bold',
        color: themeColors.defaultText,
        margin: '0'
    },
    props => ({ color: props.color })
)

interface IProps {
    color?: string
}

const H1: React.FC<IProps> = (props) => {
    return (
        <Header1 color={props.color ? props.color : themeColors.defaultText} {...props}>{props.children}</Header1>
    );
}

export default H1;