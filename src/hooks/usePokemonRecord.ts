import { useCallback, useEffect } from 'react'

import api from '../api'
import { useGet } from './api/useGet'
import { ResponsePoke } from '../utils/api/pokemon-record.types'
import { POKEMON_TYPE_COLORS } from '../utils/constants/pokemon-type.constants'
import { PokeCardProps } from '../utils/types/poke-card.types'

export const usePokemonRecord = ({ url, name, onTypesLoaded }: PokeCardProps) => {
    const parts = url?.split('/').filter(Boolean) ?? []
    const identifier = name ?? parts[parts.length - 1] ?? ''
    const fetchPokemon = useCallback(
        () => api.pokemon.pokemon(identifier),
        [identifier],
    )
    const request = useGet<ResponsePoke>(
        { functionFetch: fetchPokemon },
        { cancelError: true },
    )
    const pokemonName = request.data?.name ?? name ?? 'unknown'
    const types = request.data?.types ?? []
    const primaryType = types[0]?.type.name ?? 'normal'
    const typeColor =
        POKEMON_TYPE_COLORS[primaryType as keyof typeof POKEMON_TYPE_COLORS] ??
        '#64748b'
    const sprites = request.data?.sprites
    const artwork =
        sprites?.other?.['official-artwork']?.front_default ??
        sprites?.other?.dream_world?.front_default ??
        sprites?.front_default

    useEffect(() => {
        const loadedTypes = request.data?.types?.map(({ type }) => type.name) ?? []
        if (loadedTypes.length) onTypesLoaded?.(pokemonName, loadedTypes)
    }, [onTypesLoaded, pokemonName, request.data?.types])

    return { ...request, pokemonName, types, primaryType, typeColor, artwork }
}
