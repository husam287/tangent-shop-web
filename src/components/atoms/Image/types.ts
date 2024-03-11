import { ImageProps as NextImageProps } from "next/image";

export interface ImageProps {
    src: string;
    alt: string;
    height: string;
    isFullWidth?: boolean;
    imgWidth?: number;
    imgHeight?: number;
}
