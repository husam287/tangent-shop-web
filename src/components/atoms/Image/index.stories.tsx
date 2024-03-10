import type { Meta, StoryObj } from '@storybook/react';
import Image from ".";

const meta: Meta<typeof Image> = {
    title: "Atoms/Image",
    component: Image,
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
    args: {
        src: "/test-image.jpg",
        alt: "test",
        height: "30rem"
    }
};