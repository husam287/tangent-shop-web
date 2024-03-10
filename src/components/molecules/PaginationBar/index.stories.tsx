import type { Meta, StoryObj } from '@storybook/react';
import PaginationBar from ".";

const meta: Meta<typeof PaginationBar> = {
    title: "Molecules/PaginationBar",
    component: PaginationBar,
};

export default meta;
type Story = StoryObj<typeof PaginationBar>;

export const Default: Story = {
    args: {
        totalCount: 100,
        currentPage: 3
    }
};