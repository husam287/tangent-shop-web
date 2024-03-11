'use client'

import { CartItem } from "@/apis/@types/cart";
import { Product } from "@/apis/@types/product";
import { ReactNode, createContext, useCallback, useEffect, useMemo, useState } from "react";

interface ICartState {
    cart: CartItem[];
    addCartItem: (e: { product: Product; quantity: number }) => void
    editCartItem: (e: { productId: number; quantity: number }) => void
    removeCartItem: (e: { productId: number }) => void
}

const initialState: ICartState = {
    cart: [],
    addCartItem: () => { },
    editCartItem: () => { },
    removeCartItem: () => { },
};

const CartContext = createContext<ICartState>(initialState)

const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([])
    const [cartInitiallized, setcartInitiallized] = useState(false)

    const removeCartItem = useCallback((payload: { productId: number }) => {
        const newCart = cart?.filter((item) => item.product.id !== payload.productId)
        setCart(newCart)
    }, [cart])

    const addCartItem = useCallback((payload: { product: Product; quantity: number }) => {
        const newCart = [...cart]

        const targetCartItemIndex = cart?.findIndex(
            (item) => item.product.id === payload.product.id
        );

        if (targetCartItemIndex >= 0) {
            newCart[targetCartItemIndex] = {
                ...newCart[targetCartItemIndex],
                quantity: newCart[targetCartItemIndex].quantity + payload.quantity
            }
        } else {
            newCart?.push(payload);
        }

        setCart(newCart)
    }, [cart])

    const editCartItem = useCallback((payload: { productId: number; quantity: number }) => {
        const newCart = [...cart]

        const targetCartItemIndex = cart?.findIndex(
            (item) => item.product.id === payload.productId
        );

        console.log(targetCartItemIndex, "hiiiiii")

        if (targetCartItemIndex >= 0) {
            newCart[targetCartItemIndex] = {
                ...newCart[targetCartItemIndex],
                quantity: payload.quantity
            }

            setCart(newCart)
        }

        console.log(newCart)
    }, [cart])

    const contextValue = useMemo(() => ({
        cart,
        addCartItem,
        editCartItem,
        removeCartItem
    }), [cart, addCartItem, editCartItem, removeCartItem]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart')
        setCart(savedCart ? JSON.parse(savedCart) : [])
        setcartInitiallized(true)
    }, [])


    useEffect(() => {
        if (!cartInitiallized) return
        localStorage.setItem('cart', JSON.stringify(cart || []))
    }, [cart])

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export {
    CartContext,
    CartProvider
}