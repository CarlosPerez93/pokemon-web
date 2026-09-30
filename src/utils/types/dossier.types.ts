import { PokemonSpecies } from '../api/pokemon-species.types'
import { ResponsePoke } from '../api/pokemon-record.types'

export type DossierRecordProps = {
    pokemon: ResponsePoke
    species?: PokemonSpecies
    isFavorite: boolean
    onToggleFavorite: (name: string) => void
}
