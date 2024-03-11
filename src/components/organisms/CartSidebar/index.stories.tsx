import { withReactContext } from 'storybook-react-context';
import type { Meta, StoryObj } from '@storybook/react';
import CartSidebar from ".";
import { CartSidebarContext } from '@/context/cartSidebar';

const meta: Meta<typeof CartSidebar> = {
    title: "Organisms/CartSidebar",
    component: CartSidebar,
};

export default meta;
type Story = StoryObj<typeof CartSidebar>;

export const Primary: Story = {
    args: {

    },
    decorators: [
        withReactContext({
            Context: CartSidebarContext,
            initialState: { sidebarStatus: "opened" },
        }),
    ],
};