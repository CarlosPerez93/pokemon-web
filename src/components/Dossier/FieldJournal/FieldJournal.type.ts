import { ResponsePoke } from '@utils/api/pokemon-record.types'
import { PokemonSpecies } from '@utils/api/pokemon-species.types'

export type FieldJournalProps = {
    pokemon: ResponsePoke
    species?: PokemonSpecies
    loading?: boolean
}
