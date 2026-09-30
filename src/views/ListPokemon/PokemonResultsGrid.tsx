import PokeCard from '@components/PokeCard'
import { PokeList } from '../../utils/api/pokemon-list.types'

type PokemonResultsGridProps = {
    items: PokeList[]
    favorites: string[]
    viewMode: 'grid' | 'list'
    onToggleFavorite: (name: string) => void
    onTypesLoaded: (name: string, types: string[]) => void
}

export const PokemonResultsGrid = (props: PokemonResultsGridProps) => (
    <div className={`pokemon-grid${props.viewMode === 'list' ? ' is-list' : ''}`}>
        {props.items.map(item => (
            <PokeCard
                key={item.name}
                {...item}
                isFavorite={props.favorites.includes(item.name ?? '')}
                onToggleFavorite={props.onToggleFavorite}
                onTypesLoaded={props.onTypesLoaded}
            />
        ))}
    </div>
)
