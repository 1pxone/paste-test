export interface IMenuItem {
    name: string;
    children?: IMenuItem[];
}

export const menuData: IMenuItem[] = [
    {
        name: 'Use cases',
        children: [
            {
                name: 'Everyone',
            },
            {
                name: 'Developers',
            },
            {
                name: 'Designers',
            },
            {
                name: 'Content & Marketing',
            },
        ],
    },
    {
        name: 'Resources',
        children: [
            {
                name: 'Help & Support',
            },
            {
                name: 'Blog',
            },
            {
                name: 'Media Kit',
            },
            {
                name: 'Terms of Use',
            },
            {
                name: 'Privacy Policy',
            },
        ],
    },
    {
        name: 'Updates',
    },
    {
        name: 'Pricing',
    },
];
