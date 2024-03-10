export type ButtonVariant = "primary" | "secondary"

export interface ButtonProps {
    text?: string
    onClick?: () => void
    variant?: ButtonVariant
}