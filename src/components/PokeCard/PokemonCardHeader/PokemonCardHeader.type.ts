export type PokemonCardHeaderProps = {
    id: number
    name: string
    isFavorite?: boolean
    onToggleFavorite?: (name: string) => void
}
