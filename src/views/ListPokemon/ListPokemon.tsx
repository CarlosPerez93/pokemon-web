import { useRef } from 'react'

import { useFavorites } from '../../hooks/useFavorites'
import { CatalogResults } from '@components/Catalog/CatalogResults'
import { CatalogTitle } from '@components/Catalog/CatalogTitle'
import { CatalogToolbar } from '@components/Catalog/CatalogToolbar'
import { useCatalogFilters } from '../../hooks/useCatalogFilters'
import { usePokemonTypeIndex } from '../../hooks/usePokemonTypeIndex'
import { usePokemonCatalog } from '../../hooks/usePokemonCatalog'

import './ListPokemon.css'

export const ListPokemon = () => {
    const request = usePokemonCatalog()
    const catalog = usePokemonTypeIndex()
    const { favorites, toggleFavorite } = useFavorites()
    const filters = useCatalogFilters({
        data: request.data,
        loadedTypes: catalog.loadedTypes,
    })
    const searchRef = useRef<HTMLInputElement>(null)

    return (
        <main className='pokemon-page page-container'>
            <CatalogTitle data={request.data} loading={request.loading} />
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

export default ListPokemon
