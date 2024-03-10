import type { Meta, StoryObj } from '@storybook/react';
import NavList from ".";

const meta: Meta<typeof NavList> = {
    title: "Molecules/NavList",
    component: NavList,
};

export default meta;
type Story = StoryObj<typeof NavList>;

export const Default: Story = {
    args: {
        list: [
            {
                title: 'Home',
                href: '/',
            },
            {
                title: 'Products',
                href: '/products',
            },
        ]
    }
};