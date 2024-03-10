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
        product: {
            title: "Test product",
            category: "Test category",
            thumbnail: "/test-image.jpg",
            price: 199,
            brand: "xx",
            description: "xx",
            discountPercentage: 12,
            id: 1,
            images: [],
            rating: 2,
            stock: 102
        }
    },
    parameters: {
        layout: 'centered'
    }
};