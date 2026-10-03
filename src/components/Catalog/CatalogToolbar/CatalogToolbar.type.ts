import { RefObject } from 'react'

export type CatalogToolbarFilters = {
    searchTerm: string
    selectedType: string
    sortBy: 'number' | 'name'
    viewMode: 'grid' | 'list'
    setSearchTerm: (value: string) => void
    setSelectedType: (value: string) => void
    setSortBy: (value: 'number' | 'name') => void
    setViewMode: (value: 'grid' | 'list') => void
}

export type CatalogToolbarProps = {
    filters: CatalogToolbarFilters
    favorites: string[]
    searchRef: RefObject<HTMLInputElement>
}
