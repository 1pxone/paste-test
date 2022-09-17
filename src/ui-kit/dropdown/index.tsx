import { forwardRef, ReactNode } from 'react';
import styles from './dropdown.module.css';

export const Dropdown = forwardRef<HTMLDivElement, { children: ReactNode }>(
    ({ children, ...props }, ref) => {
        return (
            <div className={styles.dropdown} ref={ref}>
                {children}
            </div>
        );
    }
);

Dropdown.displayName = 'Dropdown';
