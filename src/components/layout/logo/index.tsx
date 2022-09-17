import { LogoText } from '../../../ui-kit/typography';
import { Box } from '../../../ui-kit/box';
import { useEffect, useState } from 'react';
import { useMediaMatcher } from '../../../ui-kit/hooks/useMediaMatcher';
import Image from 'next/image';

export const Logo = () => {
    const [isDesktop, setIsDesktop] = useState<boolean>();
    const matchDesktop = useMediaMatcher('(min-width: 800px)');

    // @FYI: SSR Workaround to prevent hydration error
    useEffect(() => {
        setIsDesktop(matchDesktop);
    }, [matchDesktop]);

    return (
        <Box display={'flex'} alignItems={'center'} style={{ cursor: 'pointer' }}>
            <Image
                src={'/logo.png'}
                width={isDesktop ? 36 : 32}
                height={isDesktop ? 36 : 32}
                alt={'paste logo'}
            />
            <LogoText>Paste</LogoText>
        </Box>
    );
};
