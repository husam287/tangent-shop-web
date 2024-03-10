export interface PaginationBarProps {
    totalCount: number
    currentPage?: number
    onSelectPage?: (e: number) => void
}
