import NextImage from "next/image";
import classes from "@/utils/classes";
import { ImageProps } from "./types";
import styles from './styles.module.scss'

export default function Image({
  src,
  alt,
  height,
  imgHeight = 100,
  imgWidth = 100,
  isFullWidth = false
}: ImageProps) {
  return (
    <NextImage
      width={imgWidth}
      height={imgHeight}
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
