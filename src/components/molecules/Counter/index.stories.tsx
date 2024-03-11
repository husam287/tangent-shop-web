import type { Meta, StoryObj } from '@storybook/react';
import Counter from ".";

const meta: Meta<typeof Counter> = {
    title: "Molecules/Counter",
    component: Counter,
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const Default: Story = {
    args: {
        initValue: 3,
        minValue: 0
    }
};