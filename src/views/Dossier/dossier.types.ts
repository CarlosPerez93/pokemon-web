import { PokemonSpecies } from '../../utils/api/pokemon-species.types'
import { ResponsePoke } from '../../utils/api/pokemon-record.types'

export type DossierRecordProps = {
    pokemon: ResponsePoke
    species?: PokemonSpecies
    isFavorite: boolean
    onToggleFavorite: (name: string) => void
}
