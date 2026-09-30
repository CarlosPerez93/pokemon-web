import { PokeList } from '../../utils/api/pokemon-list.types'
import { CatalogEmptyState } from './CatalogEmptyState'
import { CatalogErrorState } from './CatalogErrorState'
import { PokemonLoadingGrid } from './PokemonLoadingGrid'
import { PokemonResultsGrid } from './PokemonResultsGrid'

type CatalogResultsProps = {
    items: PokeList[]
    loading: boolean
    error?: boolean
    waitingForTypes: boolean
    favorites: string[]
    viewMode: 'grid' | 'list'
    onRetry: () => void
    onReset: () => void
    onToggleFavorite: (name: string) => void
    onTypesLoaded: (name: string, types: string[]) => void
}

export const CatalogResults = (props: CatalogResultsProps) => (
    <section className='catalog-results' aria-label='Pokémon results'>
        <div className='catalog-results__heading'><span className='section-kicker'>SPECIMEN RECORDS</span><span>{props.items.length} records</span></div>
        {props.error ? <CatalogErrorState onRetry={props.onRetry} /> : props.loading ? <PokemonLoadingGrid /> : props.items.length ? <PokemonResultsGrid {...props} /> : <CatalogEmptyState waitingForTypes={props.waitingForTypes} onReset={props.onReset} />}
    </section>
)
