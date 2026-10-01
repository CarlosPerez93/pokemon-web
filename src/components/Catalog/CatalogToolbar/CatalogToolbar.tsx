import { CatalogControls } from '../CatalogControls'
import { CatalogSearch } from '../CatalogSearch'
import { TypeMatrix } from '../TypeMatrix'
import { CatalogToolbarProps } from './CatalogToolbar.type'

import './CatalogToolbar.css'

export const CatalogToolbar = ({
    filters,
    favorites,
    searchRef,
}: CatalogToolbarProps) => (
    <div className='catalog-toolbar-stack'>
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
    </div>
)
