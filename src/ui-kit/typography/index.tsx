import styles from './typography.module.css';
import { FunctionComponent, ReactNode } from 'react';
import cx from 'classnames';

export const NavText: FunctionComponent<{
    children: ReactNode;
    active?: boolean;
    child?: boolean;
}> = ({ children, active, child }) => {
    return (
        <span
            className={cx(styles.navigationText, {
                [styles.navigationText__active]: active,
                [styles.navigationText__child]: child,
            })}
        >
            {children}
        </span>
    );
};

export const LogoText: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    return <span className={styles.logoText}>{children}</span>;
};
