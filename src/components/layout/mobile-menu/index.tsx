import { Fragment, useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuToggle } from '../mobile-toggle';
import { MenuItem } from '../menu-item';
import styles from './mobile-menu.module.css';
import { Delimiter } from '../../../ui-kit/delimiter';
import { IMenuItem } from '../../../data/navigation';
import { NavigationContext } from '../header';

const mobileNavigationAnimationProps = {
    transition: {
        duration: 0.3,
    },
    initial: 'collapsed',
    animate: 'open',
    exit: 'collapsed',
    variants: {
        open: { opacity: 1, height: 'auto', paddingBottom: '30px' },
        collapsed: { opacity: 0, height: 0, paddingBottom: 0 },
    },
};

export const MobileMenu = ({ menuData }: { menuData: IMenuItem[] }) => {
    const { open, toggle } = useContext(NavigationContext);

    return (
        <>
            <motion.div initial={false} animate={open ? 'open' : 'closed'}>
                <MenuToggle toggle={toggle} />
            </motion.div>
            <AnimatePresence>
                {open && (
                    <motion.div {...mobileNavigationAnimationProps} className={styles.mobileMenu}>
                        {menuData.map((item) => (
                            <Fragment key={item.name}>
                                <MenuItem item={item} />
                                <Delimiter />
                            </Fragment>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
