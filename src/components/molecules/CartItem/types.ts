import { Product } from "@/apis/@types/product";

export interface CartItemProps {
    product: Product;
    quantity: number;
}
