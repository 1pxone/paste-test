import { FunctionComponent, ReactNode } from 'react';
import styles from './container.module.css';
import { Property } from 'csstype';
import classNames from 'classnames';

export const Container: FunctionComponent<{
    children: ReactNode;
    alignItems?: Property.AlignItems;
    justifyContent?: Property.JustifyContent;
    display?: Property.Display;
}> = ({ children, alignItems, justifyContent, display }) => {
    return (
        <div
            className={classNames(styles.container, {
                [styles[`container__alignItems_${alignItems}`]]: typeof alignItems !== 'undefined',
                [styles[`container__display_${display}`]]: typeof display !== 'undefined',
                [styles[`container__justify_${justifyContent}`]]:
                    typeof justifyContent !== 'undefined',
            })}
        >
            {children}
        </div>
    );
};
