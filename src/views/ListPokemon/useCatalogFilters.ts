import { useState } from 'react'

import { useSearch } from '../../hooks/useSearch'
import { ResponseFetch } from '../../utils/api/pokemon-list.types'
import { matchesPokemonType, sortPokemon } from './catalog-sort.util'

export const useCatalogFilters = (
    data: ResponseFetch | undefined,
    favorites: string[],
    loadedTypes: Record<string, string[]>,
) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedType, setSelectedType] = useState('all')
    const [favoritesOnly, setFavoritesOnly] = useState(false)
    const [sortBy, setSortBy] = useState<'number' | 'name'>('number')
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
    const searchResults =
        useSearch({ data, stateFilter: searchTerm })?.filter(
            ({ name }) => !favoritesOnly || favorites.includes(name ?? ''),
        ) ?? []
    const sorted = sortPokemon(searchResults, sortBy)
    const visible = sorted.filter(item =>
        matchesPokemonType(item, selectedType, loadedTypes),
    )
    const waitingForTypes =
        selectedType !== 'all' &&
        searchResults.some(item => !loadedTypes[item.name ?? ''])
    const resetFilters = () => {
        setSearchTerm('')
        setSelectedType('all')
        setFavoritesOnly(false)
        setSortBy('number')
    }

    return {
        searchTerm,
        setSearchTerm,
        selectedType,
        setSelectedType,
        favoritesOnly,
        setFavoritesOnly,
        sortBy,
        setSortBy,
        viewMode,
        setViewMode,
        visible,
        waitingForTypes,
        resetFilters,
    }
}
