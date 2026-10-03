import { ResponseFetch } from '@utils/api/pokemon-list.types'

export type CatalogFiltersInput = {
    data: ResponseFetch | undefined
    loadedTypes: Record<string, string[]>
}

export type CatalogFiltersResult = {
    searchTerm: string
    setSearchTerm: (value: string) => void
    selectedType: string
    setSelectedType: (value: string) => void
    sortBy: 'number' | 'name'
    setSortBy: (value: 'number' | 'name') => void
    viewMode: 'grid' | 'list'
    setViewMode: (value: 'grid' | 'list') => void
    visible: ResponseFetch['results']
    waitingForTypes: boolean
    resetFilters: () => void
}
