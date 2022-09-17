import { IMenuItem } from '../../../data/navigation';
import { Box } from '../../../ui-kit/box';
import { MenuItem } from '../menu-item';
import { Button } from '../../../ui-kit/button';

export const DesktopMenu = ({ menuData }: { menuData: IMenuItem[] }) => {
    return (
        <>
            <Box display={'flex'} alignItems={'center'}>
                {menuData.map((item) => (
                    <MenuItem item={item} key={item.name} />
                ))}
            </Box>
            <Button>Try for free</Button>
        </>
    );
};
