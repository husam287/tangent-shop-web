import { Color } from "@/@types/color"
import { Size } from "@/@types/size"

export type TextVariant = "h1" | "h2" | "h3" | "h4" | "span" | "p" | "strong"
export type TextWeight = "normal" | "light" | "bold"

export interface TextProps {
    text?: string
    variant?: TextVariant
    fontSize?: Size
    fontWeight?: TextWeight
    color?: Color
    className?: string
}
