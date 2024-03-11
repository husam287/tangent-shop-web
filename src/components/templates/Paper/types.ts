import { Size } from "@/@types/size"
import { ReactNode } from "react"

export interface PaperProps {
    topSpacing?: Size
    bottomSpacing?: Size
    children: ReactNode
    isCentered?: boolean
}
