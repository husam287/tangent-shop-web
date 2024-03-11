import classes from "@/utils/classes";
import { CartItemProps } from "./types";
import styles from './styles.module.scss'
import Image from "@/components/atoms/Image";
import Text from "@/components/atoms/Text";
import Counter from "@/components/molecules/Counter";
import toCurrency from "@/utils/toCurrency";

export default function CartItem({
  product,
  quantity,
  onDeleteItem,
  onQuantityChange
}: CartItemProps) {
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
          onCounterChange={onQuantityChange}
          onReachedToMinValue={onDeleteItem}
        />
      </div>
    </div>
  );
}
