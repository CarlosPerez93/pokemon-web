import { CSSProperties } from 'react'

import { PokemonCardHeader } from '../PokemonCardHeader'
import { PokemonCardArtwork } from '../PokemonCardArtwork'
import { PokemonCardDetails } from '../PokemonCardDetails'
import {
    PokemonCardSkeleton,
    PokemonCardState,
} from '../PokemonCardState/PokemonCardState'

import { usePokemonRecord } from '@hooks/usePokemonRecord'
import { PokeCardProps } from '@utils/types/poke-card.types'

import './PokeCardView.css'

export const PokeCardView = (props: PokeCardProps) => {
    const record = usePokemonRecord(props)
    if (record.loading || (!record.data?.id && !record.error)) {
        return <PokemonCardSkeleton name={record.pokemonName} />
    }
    if (record.error || !record.data?.id) {
        return (
            <PokemonCardState
                name={record.pokemonName}
                onRetry={() => record.refetch()}
            />
        )
    }

    return (
        <article
            className='pokemon-card'
            data-type={record.primaryType}
            style={{ '--type-color': record.typeColor } as CSSProperties}
        >
            <div className='pokemon-card__media'>
                <PokemonCardHeader
                    id={record.data.id}
                    name={record.pokemonName}
                    isFavorite={props.isFavorite}
                    onToggleFavorite={props.onToggleFavorite}
                />
                <PokemonCardArtwork
                    name={record.pokemonName}
                    artwork={record.artwork}
                />
            </div>
            <PokemonCardDetails
                name={record.pokemonName}
                types={record.types}
                stats={record.data.stats}
            />
        </article>
    )
}

export default PokeCardView
