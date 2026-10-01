import { ResponseFetch } from '../../utils/api/pokemon-list.types'

export type CatalogFiltersInput = {
    data: ResponseFetch | undefined
    favorites: string[]
    loadedTypes: Record<string, string[]>
}

export type CatalogFiltersResult = {
    searchTerm: string
    setSearchTerm: (value: string) => void
    selectedType: string
    setSelectedType: (value: string) => void
    favoritesOnly: boolean
    setFavoritesOnly: (value: boolean | ((current: boolean) => boolean)) => void
    sortBy: 'number' | 'name'
    setSortBy: (value: 'number' | 'name') => void
    viewMode: 'grid' | 'list'
    setViewMode: (value: 'grid' | 'list') => void
    visible: ResponseFetch['results']
    waitingForTypes: boolean
    resetFilters: () => void
}
