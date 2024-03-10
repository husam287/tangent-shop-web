import NextImage from "next/image";
import classes from "@/utils/classes";
import { ImageProps } from "./types";
import styles from './styles.module.scss'

export default function Image({
  src,
  alt,
  height,
  isFullWidth = false
}: ImageProps) {
  return (
    <NextImage
      objectFit="cover"
      width={0}
      height={0}
      src={src}
      alt={alt}
      style={{ height }}
      className={
        classes([
          styles.image,
          isFullWidth ? styles.fullWidth : null
        ])
      }
    />
  );
}
