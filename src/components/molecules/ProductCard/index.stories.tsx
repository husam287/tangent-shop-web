import type { Meta, StoryObj } from '@storybook/react';
import PRODUCTS from '@/mockups/products';
import ProductCard from ".";

const meta: Meta<typeof ProductCard> = {
    title: "Molecules/ProductCard",
    component: ProductCard,
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
    args: {
        product: PRODUCTS[0]
    },
    parameters: {
        layout: 'centered'
    }
};