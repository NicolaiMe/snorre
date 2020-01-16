/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core'
import Item from './Item';
import styles from './styles';

export { Item }


interface IProps {
    ordered?: boolean;
    links?: boolean;
    points?: boolean;
    numbers?: boolean;
    numbersHighlighted?: boolean;
    connected?: boolean;
}

const List: React.FC<IProps> = (props) => {
    const Tag = props.ordered || props.numbers || props.numbersHighlighted ? 'ol' : 'ul';

    return (
        <Tag
            css={[
                styles.default,
                props.ordered && styles.ordered,
                props.links && styles.links,
                props.points && styles.points,
                props.numbers && styles.numbers,
                props.numbersHighlighted && styles.numbersHighlighted,
                props.connected && styles.connected
            ]}>
            {React.Children.map(props.children, child => {
                if (!child) {
                    return null;
                }

                return child;
            })}
        </Tag>
    );
}

export default List;