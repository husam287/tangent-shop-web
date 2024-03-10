import type { Meta, StoryObj } from '@storybook/react';
import Button from ".";
import { IoCartOutline } from 'react-icons/io5';

const meta: Meta<typeof Button> = {
    title: 'Atoms/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        text: 'text',
        variant: 'primary',
        onClick: () => { }
    }
};

export const Secondary: Story = {
    args: {
        text: 'text',
        variant: 'secondary',
        onClick: () => { }
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
};

export const Rounded: Story = {
    args: {
        shape: 'rounded',
        onClick: () => { },
        prefix: <IoCartOutline fontSize="2rem" />
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
};

export const PrimaryWithIcon: Story = {
    args: {
        text: "test",
        onClick: () => { },
        prefix: <IoCartOutline fontSize="1.5rem" />
    },
};