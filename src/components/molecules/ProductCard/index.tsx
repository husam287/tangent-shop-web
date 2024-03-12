'use client'

import classes from "@/utils/classes";
import { ProductCardProps } from "./types";
import styles from './styles.module.scss'
import Image from "@/components/atoms/Image";
import Text from "@/components/atoms/Text";
import toCurrency from "@/utils/toCurrency";
import Button from "@/components/atoms/Button";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "@/context/cart";
import { CartSidebarContext } from "@/context/cartSidebar";

export default function ProductCard({ product }: ProductCardProps) {
  const { addCartItem } = useContext(CartContext)
  const { openSidebar } = useContext(CartSidebarContext)

  const onAddToCart = () => {
    addCartItem({ product, quantity: 1 })
    openSidebar()
  }

  return (
    <div className={classes([styles.container])} data-testid="ProductCard">
      <Image
        src={product.thumbnail}
        alt={product.title}
        height="20rem"
        imgWidth={500}
        imgHeight={300}
        isFullWidth
      />

      <div className={styles.productContent}>
        <div>
          <div className={styles.productHeader}>
            <Text
              text={product.title}
              color="primary"
              fontSize="lg"
              variant="span"
              fontWeight="bold"
            />
            <Text
              text={product.category}
              color="dark"
              fontWeight="light"
              fontSize="md"
            />
          </div>

          <Text text={`${toCurrency(product.price)}`} fontWeight="bold" color="primary" fontSize="lg" />
        </div>

        <Button
          text="Add to cart"
          variant="primary"
          isFullWidth
          prefix={<IoCartOutline fontSize="1.5rem" />}
          onClick={onAddToCart}
        />
      </div>
    </div>
  );
}
