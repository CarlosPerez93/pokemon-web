import { RefObject } from 'react'

export type CatalogToolbarFilters = {
    searchTerm: string
    setSearchTerm: (value: string) => void
    selectedType: string
    setSelectedType: (value: string) => void
    sortBy: 'number' | 'name'
    setSortBy: (value: 'number' | 'name') => void
    viewMode: 'grid' | 'list'
    setViewMode: (value: 'grid' | 'list') => void
}

export type CatalogToolbarProps = {
    filters: CatalogToolbarFilters
    favorites: string[]
    searchRef: RefObject<HTMLInputElement>
}
