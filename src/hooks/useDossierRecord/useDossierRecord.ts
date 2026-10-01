import { useCallback } from 'react'

import api from '../../api'
import { useGet } from '@hooks/api/useGet'
import { PokemonSpecies, ResponsePoke } from '@utils/api/api.util'

export const useDossierRecord = (name: string) => {
    const fetchPokemon = useCallback(() => api.pokemon.pokemon(name), [name])
    const fetchSpecies = useCallback(() => api.pokemon.species(name), [name])
    const record = useGet<ResponsePoke>(
        { functionFetch: fetchPokemon },
        { cancelError: true },
    )
    const species = useGet<PokemonSpecies>(
        { functionFetch: fetchSpecies },
        { cancelError: true },
    )

    return {
        pokemon: record.data,
        species: species.data,
        loading: record.loading,
        error: record.error,
        refetch: record.refetch,
    }
}
