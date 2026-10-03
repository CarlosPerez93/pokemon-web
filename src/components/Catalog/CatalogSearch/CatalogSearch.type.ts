import { RefObject } from 'react'

export type CatalogSearchProps = {
    value: string
    inputRef: RefObject<HTMLInputElement>

    onChange: (value: string) => void
}
