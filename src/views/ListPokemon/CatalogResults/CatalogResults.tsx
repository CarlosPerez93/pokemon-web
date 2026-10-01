import { PokeList } from '../../../utils/api/pokemon-list.types'
import { CatalogEmptyState } from '../CatalogEmptyState'
import { CatalogErrorState } from '../CatalogErrorState'
import { CatalogLoadMore } from '../CatalogLoadMore'
import { PokemonLoadingGrid } from '../PokemonLoadingGrid'
import { PokemonResultsGrid } from '../PokemonResultsGrid'

import './CatalogResults.css'
import './CatalogResultsState.css'

type CatalogResultsProps = {
    items: PokeList[]
    loading: boolean
    error?: boolean
    waitingForTypes: boolean
    favorites: string[]
    viewMode: 'grid' | 'list'
    hasMore: boolean
    loadingMore: boolean
    onLoadMore: () => void
    onRetry: () => void
    onReset: () => void
    onToggleFavorite: (name: string) => void
    onTypesLoaded: (name: string, types: string[]) => void
}

export const CatalogResults = (props: CatalogResultsProps) => (
    <section className='catalog-results' aria-label='Pokémon results'>
        <div className='catalog-results__heading'>
            <span className='section-kicker'>SPECIMEN RECORDS</span>
            <span>{props.items.length} records</span>
        </div>
        {props.error ? (
            <CatalogErrorState onRetry={props.onRetry} />
        ) : props.loading ? (
            <PokemonLoadingGrid />
        ) : props.items.length ? (
            <>
                <PokemonResultsGrid {...props} />
                <CatalogLoadMore
                    hasMore={props.hasMore}
                    loadingMore={props.loadingMore}
                    onLoadMore={props.onLoadMore}
                />
            </>
        ) : (
            <CatalogEmptyState
                waitingForTypes={props.waitingForTypes}
                onReset={props.onReset}
            />
        )}
    </section>
)
