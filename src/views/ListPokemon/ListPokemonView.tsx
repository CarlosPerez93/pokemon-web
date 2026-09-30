import { useRef } from 'react'

import api from '../../api'
import { useGet } from '../../hooks/api/useGet'
import { useFavorites } from '../../hooks/useFavorites'
import { ResponseFetch } from '../../utils/api/pokemon-list.types'
import { CatalogControls } from './CatalogControls'
import { CatalogResults } from './CatalogResults'
import { CatalogSearch } from './CatalogSearch'
import { CatalogTitle } from './CatalogTitle'
import { TypeMatrix } from './TypeMatrix'
import { useCatalogFilters } from './useCatalogFilters'
import { usePokemonTypeIndex } from './usePokemonTypeIndex'
import './ListPokemon.css'

export const ListPokemonView = () => {
    const request = useGet<ResponseFetch>({ functionFetch: api.pokemon.pokemonList })
    const catalog = usePokemonTypeIndex()
    const { favorites, toggleFavorite } = useFavorites()
    const filters = useCatalogFilters(request.data, favorites, catalog.loadedTypes)
    const searchRef = useRef<HTMLInputElement>(null)

    return (
        <main className='pokemon-page page-container'>
            <CatalogTitle data={request.data} />
            <CatalogSearch value={filters.searchTerm} inputRef={searchRef} onChange={filters.setSearchTerm} />
            <TypeMatrix selected={filters.selectedType} onSelect={filters.setSelectedType} />
            <CatalogControls sortBy={filters.sortBy} viewMode={filters.viewMode} favoritesOnly={filters.favoritesOnly} favoriteCount={favorites.length} onSort={filters.setSortBy} onView={filters.setViewMode} onFavorites={() => filters.setFavoritesOnly(value => !value)} />
            <div className='catalog-layout'>
                <CatalogResults items={filters.visible} loading={request.loading} error={request.error} waitingForTypes={filters.waitingForTypes} favorites={favorites} viewMode={filters.viewMode} onRetry={() => request.refetch()} onReset={filters.resetFilters} onToggleFavorite={toggleFavorite} onTypesLoaded={catalog.onTypesLoaded} />
            </div>
        </main>
    )
}

export default ListPokemonView
