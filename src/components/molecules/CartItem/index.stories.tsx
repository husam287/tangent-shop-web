import type { Meta, StoryObj } from '@storybook/react';
import CartItem from ".";
import PRODUCTS from '@/mockups/products';

const meta: Meta<typeof CartItem> = {
    title: "Molecules/CartItem",
    component: CartItem,
};

export default meta;
type Story = StoryObj<typeof CartItem>;

export const Default: Story = {
    args: {
        product: PRODUCTS[0],
        quantity: 4,
    }
};