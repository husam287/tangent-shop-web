export interface NavItem {
    title: string;
    href: string;
    isActive?: boolean
}

export interface NavListProps {
    list: NavItem[]
}
