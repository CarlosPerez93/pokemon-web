import { PokemonCries } from '@utils/api/pokemon-record.types'

export type DossierActionsProps = {
    name: string
    isFavorite: boolean
    cries?: PokemonCries
    onToggleFavorite: (name: string) => void
}
