import { LoaderProps } from "./types";
import styles from './styles.module.scss'
import { Size } from "@/@types/size";
import { CustomCSS } from "@/@types/CustomCss";

export default function Loader({ size = 'sm' }: LoaderProps) {
  const sizeMap = new Map<Size, number>([
    ["sm", 2],
    ["md", 4],
    ["lg", 6],
  ])

  const defaultSize = sizeMap.get("sm") as number

  const width = sizeMap.get(size) || defaultSize
  const height = sizeMap.get(size) || defaultSize

  return (
    <div className={styles.container}>
      <div className={styles["lds-ripple"]} style={{ '--width': `${width}rem`, '--height': `${height}rem` } as CustomCSS}>
        <div />
        <div />
      </div>
    </div>
  );
}
