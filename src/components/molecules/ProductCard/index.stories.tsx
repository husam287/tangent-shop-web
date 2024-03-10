import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from ".";

const meta: Meta<typeof ProductCard> = {
    title: "Molecules/ProductCard",
    component: ProductCard,
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
    args: {
        
    },
    parameters:{
        layout:'centered'
    }
};