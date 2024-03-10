import classes from "@/utils/classes";
import { ProductCardProps } from "./types";
import styles from './styles.module.scss'
import Image from "@/components/atoms/Image";
import Text from "@/components/atoms/Text";
import toCurrency from "@/utils/toCurrency";
import Button from "@/components/atoms/Button";
import { IoCartOutline } from "react-icons/io5";

export default function ProductCard({ product }: ProductCardProps) {
  const onAddToCart = () => {
    console.log(product)
  }

  return (
    <div className={classes([styles.container])}>
      <Image
        src={product.thumbnail}
        alt={product.title}
        height="20rem"
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
