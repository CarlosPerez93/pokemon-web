import {
    PokemonStatSlot,
    PokemonTypeSlot,
    ResponsePoke,
} from '../api/pokemon-record.types'

export type PokeCardProps = {
    url?: string
    name?: string
    isFavorite?: boolean
    onToggleFavorite?: (name: string) => void
    onTypesLoaded?: (name: string, types: string[]) => void
}

export type PokemonCardRecord = {
    pokemon: ResponsePoke
    name: string
    types: PokemonTypeSlot[]
    stats: PokemonStatSlot[]
    artwork?: string | null
}
