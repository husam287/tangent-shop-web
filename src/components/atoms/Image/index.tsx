import NextImage from "next/image";
import { ImageProps } from "./types";
import styles from './styles.module.scss'

export default function Image({ src, alt, height }: ImageProps) {
  return (
    <div className={styles.container} style={{ height }}>
      <NextImage
        fill
        objectFit="cover"
        src={src}
        alt={alt}
      />
    </div>
  );
}
