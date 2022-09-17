import { forwardRef, ReactNode } from 'react';
import styles from './nav-item.module.css';
import { TPolymorphicComponentProps } from '../../types/component.types';
import cx from 'classnames';

export const NavItem = forwardRef<
    HTMLDivElement,
    TPolymorphicComponentProps<'div', { children: ReactNode; active?: boolean; child?: boolean }>
>(({ children, active, child, ...props }, ref) => {
    return (
        <div
            className={cx(styles['nav-item'], {
                [styles['nav-item__active']]: active,
                [styles['nav-item__child']]: child,
            })}
            {...props}
            ref={ref}
        >
            {children}
        </div>
    );
});

NavItem.displayName = 'NavItem';
