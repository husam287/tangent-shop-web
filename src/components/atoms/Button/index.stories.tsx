import type { Meta, StoryObj } from '@storybook/react';
import Button from ".";

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