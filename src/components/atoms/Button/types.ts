import { ReactNode } from "react"

export type ButtonVariant = "primary" | "secondary"

export interface ButtonProps {
    text?: string
    onClick?: () => void
    variant?: ButtonVariant
    shape?: 'normal' | 'rounded'
    isFullWidth?: boolean
    prefix?: ReactNode
}