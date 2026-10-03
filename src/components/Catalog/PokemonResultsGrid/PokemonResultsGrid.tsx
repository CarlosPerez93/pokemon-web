import { PokeCard } from '@components/PokeCard'

import { PokemonResultsGridProps } from './PokemonResultsGrid.type'

import './PokemonResultsGrid.css'

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

export default PokemonResultsGrid
