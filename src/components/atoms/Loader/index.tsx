import { LoaderProps } from "./types";
import styles from './styles.module.scss'
import { Size } from "@/@types/size";
import { CustomCSS } from "@/@types/customCss";
import COLORS from "@/constant/colors";

export default function Loader({ size = 'sm', color = 'primary' }: LoaderProps) {
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
      <div
        className={styles["lds-ripple"]}
        style={{
          '--width': `${width}rem`,
          '--height': `${height}rem`,
          '--color': COLORS[color]
        } as CustomCSS}
      >
        <div />
        <div />
      </div>
    </div>
  );
}
