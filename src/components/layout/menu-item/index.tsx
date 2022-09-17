import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from '../../../ui-kit/hooks/useOnClickOutside';
import { NavItem } from '../../../ui-kit/nav-item';
import ArrowIcon from '../../../ui-kit/icons/arrow.svg';
import { Dropdown } from '../../../ui-kit/dropdown';
import { AnimatePresence, motion } from 'framer-motion';
import { NavText } from '../../../ui-kit/typography';
import { NavigationContext } from '../header';
import { useMediaMatcher } from '../../../ui-kit/hooks/useMediaMatcher';
import { IMenuItem } from '../../../data/navigation';

const animationProps = (isDesktop?: boolean) => {
    if (isDesktop) {
        return {
            transition: {
                duration: 0.3,
            },
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
        };
    }
    return {
        transition: {
            duration: 0.3,
        },
        initial: 'collapsed',
        animate: 'open',
        exit: 'collapsed',
        variants: {
            open: { opacity: 1, height: 'auto', marginBottom: 30 },
            collapsed: { opacity: 0, height: 0, marginBottom: 0 },
        },
    };
};

export const MenuItem = ({ item }: { item: IMenuItem }) => {
    const [open, setOpen] = useState(false);
    const dropdownContainerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    const [isDesktop, setIsDesktop] = useState<boolean>();
    const matchDesktop = useMediaMatcher('(min-width: 800px)');

    const { toggle } = useContext(NavigationContext);

    useOnClickOutside({ dropdownContainerRef, triggerRef, handler: () => setOpen(false) });

    // @FYI: SSR Workaround to prevent hydration error
    useEffect(() => {
        setIsDesktop(matchDesktop);
    }, [matchDesktop]);

    const ChildrenWrapper = isDesktop ? Dropdown : Fragment;

    const ChildContent = (
        <AnimatePresence>
            {open ? (
                <motion.div {...animationProps(isDesktop)}>
                    <ChildrenWrapper ref={isDesktop ? dropdownContainerRef : null}>
                        {item?.children?.map((child: IMenuItem) => (
                            <NavItem child={true} onClick={toggle} key={child.name}>
                                <NavText child={true}>{child.name}</NavText>
                            </NavItem>
                        ))}
                    </ChildrenWrapper>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );

    return (
        <>
            <NavItem
                onClick={item.children?.length ? () => setOpen(!open) : toggle}
                active={open}
                ref={triggerRef}
            >
                <NavText active={open}>{item.name}</NavText>
                {item.children?.length && isDesktop ? (
                    <motion.span
                        transition={{
                            duration: 0.3,
                        }}
                        style={{ marginLeft: 4, width: 16, height: 16 }}
                        initial={{ rotate: 0 }}
                        animate={open ? { rotate: -180 } : { rotate: 0 }}
                    >
                        <ArrowIcon />
                    </motion.span>
                ) : null}
                {isDesktop ? ChildContent : null}
            </NavItem>
            {isDesktop ? null : ChildContent}
        </>
    );
};
