import classes from "@/utils/classes";
import { ProductCardProps } from "./types";
import styles from './styles.module.scss'
import Image from "@/components/atoms/Image";
import Text from "@/components/atoms/Text";
import toCurrency from "@/utils/toCurrency";

export default function ProductCard({ }: ProductCardProps) {
  return (
    <div className={classes([styles.container])}>
      <Image
        src="/test-image.jpg"
        height="20rem"
        alt="sss"
      />

      <div className={styles.productContent}>
        <div className={styles.productHeader}>
          <Text
            text="Test product"
            color="primary"
            fontSize="lg"
            variant="span"
            fontWeight="bold"
          />
          <Text
            text="smartphone"
            color="dark"
            fontWeight="light"
            fontSize="md"
          />
        </div>

        <Text text={`${toCurrency(200)}`} fontWeight="bold" color="primary" fontSize="lg"/>
      </div>
    </div>
  );
}
