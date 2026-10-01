import {
    PokemonStatSlot,
    PokemonTypeSlot,
} from '../../../utils/api/pokemon-record.types'

export type PokemonCardDetailsProps = {
    name: string
    types: PokemonTypeSlot[]
    stats: PokemonStatSlot[]
}
