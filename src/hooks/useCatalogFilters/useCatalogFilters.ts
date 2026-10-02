import { useState } from 'react'

import { useSearch } from '../useSearch'
import { matchesPokemonType, sortPokemon } from '../../utils/types/catalog-sort.util'
import { CatalogFiltersInput } from './useCatalogFilters.type'

export const useCatalogFilters = ({
    data,
    loadedTypes,
}: CatalogFiltersInput) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedType, setSelectedType] = useState('all')
    const [sortBy, setSortBy] = useState<'number' | 'name'>('number')
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
    const searchResults = useSearch({ data, stateFilter: searchTerm }) ?? []
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
        setSortBy('number')
    }

    return {
        searchTerm,
        setSearchTerm,
        selectedType,
        setSelectedType,
        sortBy,
        setSortBy,
        viewMode,
        setViewMode,
        visible,
        waitingForTypes,
        resetFilters,
    }
}
