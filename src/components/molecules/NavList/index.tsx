import classes from "@/utils/classes";
import { NavListProps } from "./types";
import styles from './styles.module.scss'
import Link from "next/link";
import Text from "@/components/atoms/Text";

export default function NavList({ list }: NavListProps) {
  return (
    <div className={classes([styles.container])}>
      {list.map(item => (
        <Link href={item.href} className={styles.link}>
          <Text text={item.title} color="primary" fontSize="md" />
        </Link>
      ))
      }
    </div>
  );
}
