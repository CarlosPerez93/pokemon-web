import { RefObject } from 'react'

import { CatalogControls } from './CatalogControls'
import { CatalogSearch } from './CatalogSearch'
import { TypeMatrix } from './TypeMatrix'

type CatalogToolbarProps = {
    filters: {
        searchTerm: string
        setSearchTerm: (value: string) => void
        selectedType: string
        setSelectedType: (value: string) => void
        sortBy: 'number' | 'name'
        setSortBy: (value: 'number' | 'name') => void
        viewMode: 'grid' | 'list'
        setViewMode: (value: 'grid' | 'list') => void
        favoritesOnly: boolean
        setFavoritesOnly: (value: (current: boolean) => boolean) => void
    }
    favorites: string[]
    searchRef: RefObject<HTMLInputElement>
}

export const CatalogToolbar = ({
    filters,
    favorites,
    searchRef,
}: CatalogToolbarProps) => (
    <>
        <CatalogSearch
            value={filters.searchTerm}
            inputRef={searchRef}
            onChange={filters.setSearchTerm}
        />
        <TypeMatrix
            selected={filters.selectedType}
            onSelect={filters.setSelectedType}
        />
        <CatalogControls
            sortBy={filters.sortBy}
            viewMode={filters.viewMode}
            favoritesOnly={filters.favoritesOnly}
            favoriteCount={favorites.length}
            onSort={filters.setSortBy}
            onView={filters.setViewMode}
            onFavorites={() => filters.setFavoritesOnly(value => !value)}
        />
    </>
)
