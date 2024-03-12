import classes from "@/utils/classes";
import { ProductsListProps } from "./types";
import styles from './styles.module.scss'
import ProductCard from "@/components/molecules/ProductCard";

export default function ProductsList({ products }: ProductsListProps) {
  return (
    <div className={classes([styles.container])} data-testid="ProductsList">
      {products?.map(item => (
        <ProductCard product={item} key={item.id} />
      ))}
    </div>
  );
}
