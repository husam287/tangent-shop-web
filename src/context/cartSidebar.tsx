'use client'

import { ReactNode, createContext, useCallback, useMemo, useState } from "react";

interface CartSidebarContextValueType {
    sidebarStatus: "opened" | "closed";
    openSidebar: () => void;
    closeSidebar: () => void;
}

const initalState: CartSidebarContextValueType = {
    sidebarStatus: "closed",
    closeSidebar: () => { },
    openSidebar: () => { }
}

const CartSidebarContext = createContext<CartSidebarContextValueType>(initalState)

const CartSidebarProvider = ({ children }: { children: ReactNode }) => {
    const [sidebarStatus, setsidebarStatus] = useState<'opened' | 'closed'>("opened")

    const openSidebar = useCallback(() => {
        setsidebarStatus("opened");
    }, []);

    const closeSidebar = useCallback(() => {
        setsidebarStatus("closed");
    }, []);

    const contextValue = useMemo(() => ({
        sidebarStatus,
        openSidebar,
        closeSidebar
    }), [sidebarStatus, openSidebar, closeSidebar]);

    return (
        <CartSidebarContext.Provider value={contextValue}>
            {children}
        </CartSidebarContext.Provider>
    )
}

export {
    CartSidebarContext,
    CartSidebarProvider
}