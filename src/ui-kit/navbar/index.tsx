import { FunctionComponent, ReactNode } from 'react';
import styles from './navbar.module.css';
import { Container } from '../container';
import cx from 'classnames';

export const Navbar: FunctionComponent<{ children: ReactNode; open?: boolean }> = ({
    children,
    open,
}) => {
    return (
        <nav
            className={cx(styles.navbar, {
                [styles.navbar__open]: open,
            })}
        >
            <Container alignItems={'center'} justifyContent={'space-between'} display={'flex'}>
                {children}
            </Container>
        </nav>
    );
};
