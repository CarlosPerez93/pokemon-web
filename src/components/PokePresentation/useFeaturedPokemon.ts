import { useCallback } from 'react'

import api from '../../api'
import { useGet } from '../../hooks/api/useGet'
import { PokemonSpecies } from '../../utils/api/pokemon-species.types'
import { ResponsePoke } from '../../utils/api/pokemon-record.types'
import { POKEMON_TYPE_COLORS } from '../../utils/constants/pokemon-type.constants'

export const useFeaturedPokemon = (name: string) => {
    const fetchPokemon = useCallback(() => api.pokemon.pokemon(name), [name])
    const fetchSpecies = useCallback(() => api.pokemon.species(name), [name])
    const record = useGet<ResponsePoke>({ functionFetch: fetchPokemon }, { cancelError: true })
    const species = useGet<PokemonSpecies>({ functionFetch: fetchSpecies }, { cancelError: true })
    const primaryType = record.data?.types?.[0]?.type.name ?? 'normal'
    const sprites = record.data?.sprites
    const artwork = sprites?.other?.['official-artwork']?.front_default
        ?? sprites?.other?.dream_world?.front_default
        ?? sprites?.front_default

    return {
        ...record,
        pokemon: record.data,
        genus: species.data?.genera?.find(({ language }) => language.name === 'en')?.genus,
        fieldNote: species.data?.flavor_text_entries?.find(({ language }) => language.name === 'en')?.flavor_text.replace(/[\n\f]/g, ' '),
        primaryType,
        typeColor: POKEMON_TYPE_COLORS[primaryType as keyof typeof POKEMON_TYPE_COLORS] ?? '#64748b',
        artwork,
    }
}
