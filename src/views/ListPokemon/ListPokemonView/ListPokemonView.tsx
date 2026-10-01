import { useRef } from 'react'

import { useFavorites } from '../../../hooks/useFavorites'
import { CatalogToolbar } from '../CatalogToolbar'
import { CatalogResults } from '../CatalogResults'
import { CatalogTitle } from '../CatalogTitle'
import { useCatalogFilters } from '../../../hooks/useCatalogFilters'
import { usePokemonTypeIndex } from '../../../hooks/usePokemonTypeIndex'
import { usePokemonCatalog } from '../../../hooks/usePokemonCatalog'

import './ListPokemonView.css'

export const ListPokemonView = () => {
    const request = usePokemonCatalog()
    const catalog = usePokemonTypeIndex()
    const { favorites, toggleFavorite } = useFavorites()
    const filters = useCatalogFilters(request.data, favorites, catalog.loadedTypes)
    const searchRef = useRef<HTMLInputElement>(null)

    return (
        <main className='pokemon-page page-container'>
            <CatalogTitle data={request.data} />
            <CatalogToolbar
                filters={filters}
                favorites={favorites}
                searchRef={searchRef}
            />
            <div className='catalog-layout'>
                <CatalogResults
                    items={filters.visible}
                    loading={request.loading}
                    error={request.error}
                    waitingForTypes={filters.waitingForTypes}
                    favorites={favorites}
                    viewMode={filters.viewMode}
                    hasMore={request.hasMore}
                    loadingMore={request.loadingMore}
                    onLoadMore={request.loadMore}
                    onRetry={() => request.refetch()}
                    onReset={filters.resetFilters}
                    onToggleFavorite={toggleFavorite}
                    onTypesLoaded={catalog.onTypesLoaded}
                />
            </div>
        </main>
    )
}

export default ListPokemonView
