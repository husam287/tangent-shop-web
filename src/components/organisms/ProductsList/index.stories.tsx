import type { Meta, StoryObj } from '@storybook/react';
import PRODUCTS from '@/mockups/products';
import ProductsList from ".";

const meta: Meta<typeof ProductsList> = {
    title: "Organisms/ProductsList",
    component: ProductsList,
};

export default meta;
type Story = StoryObj<typeof ProductsList>;

export const Primary: Story = {
    args: {
        products: PRODUCTS
    }
};