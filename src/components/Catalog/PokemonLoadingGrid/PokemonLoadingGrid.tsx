import { PokemonCardSkeleton } from '@components/PokeCard/PokemonCardState/PokemonCardState'
import { PokemonLoadingGridProps } from './PokemonLoadingGrid.type'

export const PokemonLoadingGrid = ({ count = 8 }: PokemonLoadingGridProps) => (
    <div className='pokemon-grid' aria-busy='true' aria-label='Loading Pokémon'>
        {Array.from({ length: count }, (_, index) => (
            <PokemonCardSkeleton key={index} />
        ))}
    </div>
)

export default PokemonLoadingGrid
