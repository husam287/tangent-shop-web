import { useContext, useMemo } from "react";
import classes from "@/utils/classes";
import Image from "@/components/atoms/Image";
import Text from "@/components/atoms/Text";
import Counter from "@/components/molecules/Counter";
import toCurrency from "@/utils/toCurrency";
import { CartContext } from "@/context/cart";
import { debounce } from "lodash-es";
import { CartItemProps } from "./types";
import styles from './styles.module.scss'

export default function CartItem({
  product,
  quantity,
}: CartItemProps) {
  const { removeCartItem, editCartItem } = useContext(CartContext)

  const onDeleteItem = () => {
    console.log("hiii", product)
    removeCartItem({ productId: product.id })
  }

  const onQuantityChange = (e: number) => {
    editCartItem({ productId: product.id, quantity: e })
  }

  const debouncedEditCartHandler = useMemo(
    () => debounce(onQuantityChange, 300),
    [onQuantityChange]
  );

  return (
    <div className={classes([styles.container])}>
      <div className={styles.imageContainer}>
        <Image
          imgHeight={100}
          imgWidth={100}
          height="100%"
          isFullWidth
          src={product.thumbnail}
          alt={product.title}
        />
      </div>

      <div className={styles.cartItemContent}>
        <div>
          <Text text={product.title} fontSize="lg" color="dark" variant="p" fontWeight="bold" />
          <Text text={product.category} fontSize="md" color="dark" variant="p" />
        </div>

        <Text
          text={`${quantity} x ${toCurrency(product.price)}`}
          fontSize="lg"
          color="primary"
          fontWeight="bold"
        />

        <Counter
          minValue={0}
          initValue={quantity}
          onCounterChange={debouncedEditCartHandler}
          onReachedToMinValue={onDeleteItem}
        />
      </div>
    </div>
  );
}
