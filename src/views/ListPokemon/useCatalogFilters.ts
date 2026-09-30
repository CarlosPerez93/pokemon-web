import { useState } from 'react'

import { useSearch } from '../../hooks/useSearch'
import { PokeList, ResponseFetch } from '../../utils/api/pokemon-list.types'

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
    const searchResults = useSearch({ data, stateFilter: searchTerm })?.filter(({ name }) => !favoritesOnly || favorites.includes(name ?? '')) ?? []
    const sorted = [...searchResults].sort((a, b) => sortBy === 'name' ? (a.name ?? '').localeCompare(b.name ?? '') : dexNumber(a) - dexNumber(b))
    const visible = sorted.filter(item => matchesType(item, selectedType, loadedTypes))
    const waitingForTypes = selectedType !== 'all' && searchResults.some(item => !loadedTypes[item.name ?? ''])
    const resetFilters = () => {
        setSearchTerm('')
        setSelectedType('all')
        setFavoritesOnly(false)
        setSortBy('number')
    }

    return { searchTerm, setSearchTerm, selectedType, setSelectedType, favoritesOnly, setFavoritesOnly, sortBy, setSortBy, viewMode, setViewMode, visible, waitingForTypes, resetFilters }
}

const dexNumber = (pokemon: PokeList) => Number(pokemon.url.split('/').filter(Boolean).pop())
const matchesType = (pokemon: PokeList, type: string, loaded: Record<string, string[]>) =>
    type === 'all' || !loaded[pokemon.name ?? ''] || loaded[pokemon.name ?? ''].includes(type)
