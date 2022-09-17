import classNames from 'classnames';

import styles from './box.module.css';

import type { TBoxProps } from './box.types';
import { FunctionComponent } from 'react';

export const Box: FunctionComponent<TBoxProps> = ({
    children,
    className,
    alignItems,
    display,
    justifyContent,
    ...props
}) => {
    const boxClass = classNames(
        {
            [styles[`box__alignItems_${alignItems}`]]: typeof alignItems !== 'undefined',
            [styles[`box__display_${display}`]]: typeof display !== 'undefined',
            [styles[`box__justify_${justifyContent}`]]: typeof justifyContent !== 'undefined',
        },
        className ? className : ''
    );

    return (
        <div className={boxClass} {...props}>
            {children}
        </div>
    );
};
