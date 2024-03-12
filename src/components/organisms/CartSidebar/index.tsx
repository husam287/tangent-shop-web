'use client'

import classes from "@/utils/classes";
import { CartSidebarProps } from "./types";
import styles from './styles.module.scss'
import { useContext } from "react";
import { CartSidebarContext } from "@/context/cartSidebar";
import Button from "@/components/atoms/Button";
import { IoClose } from "react-icons/io5";
import CartItem from "@/components/molecules/CartItem";
import toCurrency from "@/utils/toCurrency";
import Text from "@/components/atoms/Text";
import { CartContext } from "@/context/cart";

export default function CartSidebar({ }: CartSidebarProps) {
  const { cart } = useContext(CartContext)
  const { sidebarStatus, closeSidebar } = useContext(CartSidebarContext)
  const isVisbleCartSidebar = sidebarStatus === 'opened'

  const onDismiss = () => {
    closeSidebar()
  }

  const getTotalPrice = () => {
    const totalPrice = cart.reduce(
      (sum, item) => item.product.price * item.quantity + sum,
      0
    );

    return toCurrency(totalPrice);
  };

  const onGoToCheckout = () => {
    // TODO
  };

  return (
    <aside data-testid="CartSidebar">
      <div
        className={
          classes([
            styles.overlay,
            isVisbleCartSidebar ? styles.opened : null
          ])
        }
        onClick={onDismiss}
      />

      <div className={
        classes([
          styles.container,
          isVisbleCartSidebar ? styles.opened : null
        ])
      }
      >
        <div className={styles.header}>
          <Button prefix={<IoClose />} onClick={onDismiss} />
          <Text text="CART" color="dark" fontSize="xl" fontWeight="bold" />
        </div>

        <div className={styles.mainContent}>
          {cart.map(item => (
            <CartItem
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
            />
          ))
          }
        </div>

        <div className={styles.footer}>

          {!!cart?.length &&
            <Button text={`CHECKOUT (${getTotalPrice()})`} onClick={onGoToCheckout} />
          }
        </div>
      </div>
    </aside>
  );
}
