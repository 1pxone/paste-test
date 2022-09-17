import '../src/styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../src/components/layout';
import { createContext, useEffect, useState } from 'react';
import { usePrefersColorScheme } from '../src/ui-kit/hooks/usePrefersColorScheme';

type TThemes = 'light' | 'dark';

type TThemeContext = { theme: TThemes; setTheme: (theme: TThemes) => void };

const defaultContextValue: TThemeContext = { theme: 'dark', setTheme: (theme) => theme };

export const ThemeContext = createContext<TThemeContext>(defaultContextValue);

function MyApp({ Component, pageProps }: AppProps) {
    const prefersColorScheme = usePrefersColorScheme({ ssr: true });

    const [theme, setTheme] = useState<TThemes>(prefersColorScheme);

    useEffect(() => {
        setTheme(prefersColorScheme);
    }, [prefersColorScheme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeContext.Provider>
    );
}

export default MyApp;
