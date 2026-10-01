import { CatalogResultsProps } from './CatalogResults.type'
import { CatalogEmptyState } from '../CatalogEmptyState'
import { CatalogErrorState } from '../CatalogErrorState'
import { CatalogLoadMore } from '../CatalogLoadMore'
import { PokemonLoadingGrid } from '../PokemonLoadingGrid'
import { PokemonResultsGrid } from '../PokemonResultsGrid'

import './CatalogResults.css'
import './CatalogResultsState.css'

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
