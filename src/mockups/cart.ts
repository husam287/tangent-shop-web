import { CartItem } from "@/apis/@types/cart";
import PRODUCTS from "./products";

const CART: CartItem[] = [
    {
        product: PRODUCTS[0],
        quantity: 4
    },
    {
        product: PRODUCTS[1],
        quantity: 18
    },
]

export default CART