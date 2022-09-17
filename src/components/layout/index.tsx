import { ReactNode, useContext } from 'react';
import { Header } from './header';
import { ThemeContext } from '../../../pages/_app';

export const Layout = ({ children }: { children: ReactNode }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme}>
            <Header />
            {children}
        </div>
    );
};
