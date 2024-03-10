import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

export default function useQueryParams() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const getQuery = (key: string) => {
        return searchParams.get('search')
    }

    const setQuery = (key: string, value: string) => {
        router.push(`${pathname}?${createQueryString(key, value)}`)
    }

    return {
        getQuery,
        setQuery
    }
}