import { Navbar } from '../../ui-kit/navbar';
import { createContext, useContext, useEffect, useState } from 'react';
import { useMediaMatcher } from '../../ui-kit/hooks/useMediaMatcher';
import { MobileMenu } from './mobile-menu';
import { ThemeContext } from '../../../pages/_app';
import { menuData } from '../../data/navigation';
import { DesktopMenu } from './desktop-menu';
import { Logo } from './logo';

export const NavigationContext = createContext({ open: false, toggle: () => {} });

export const Header = () => {
    const [isDesktop, setIsDesktop] = useState<boolean>();
    const matchDesktop = useMediaMatcher('(min-width: 800px)');

    // @FYI: SSR Workaround to prevent hydration error
    useEffect(() => {
        setIsDesktop(matchDesktop);
    }, [matchDesktop]);

    const [open, setOpen] = useState(false);
    const { theme } = useContext(ThemeContext);

    // @FYI: Design issue (mobile navigation background changes on darkmode only)
    const mobileMenuIsOpen_dark = !isDesktop && open && theme === 'dark';

    return (
        <NavigationContext.Provider value={{ open, toggle: () => setOpen(!open) }}>
            <Navbar open={mobileMenuIsOpen_dark}>
                <Logo />
                {isDesktop ? (
                    <DesktopMenu menuData={menuData} />
                ) : (
                    <MobileMenu menuData={menuData} />
                )}
            </Navbar>
        </NavigationContext.Provider>
    );
};
