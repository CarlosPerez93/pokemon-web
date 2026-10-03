import { PokeList } from '@utils/api/pokemon-list.types'

export type PokemonResultsGridProps = {
    items: PokeList[]
    favorites: string[]
    viewMode: 'grid' | 'list'
    onToggleFavorite: (name: string) => void
    onTypesLoaded: (name: string, types: string[]) => void
}
