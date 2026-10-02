import { CSSProperties } from 'react'

import { FeatureError } from '@components/PokePresentation/FeatureError'
import { FeatureMetrics } from '@components/PokePresentation/FeatureMetrics'
import { FeatureDetails } from '@components/PokePresentation/FeatureDetails'
import { FeatureArtwork } from '@components/PokePresentation/FeatureArtwork'

import { useFeaturedPokemon } from '@hooks/useFeaturedPokemon'
import { PokePresentationProps } from './PokePresentationView.type'

import './PokePresentationView.css'
import '../FeatureError/FeatureError.css'

export const PokePresentationView = ({ name }: PokePresentationProps) => {
    const record = useFeaturedPokemon(name)
    if (record.loading || (!record.pokemon?.id && !record.error)) {
        return (
            <div
                className='feature-skeleton'
                aria-busy='true'
                aria-label='Loading specimen'
            />
        )
    }
    if (record.error || !record.pokemon?.id)
        return <FeatureError onRetry={() => record.refetch()} />

    return (
        <article
            className='feature-slide'
            data-type={record.primaryType}
            style={{ '--type-color': record.typeColor } as CSSProperties}
        >
            <FeatureDetails
                pokemon={record.pokemon}
                genus={record.genus}
                fieldNote={record.fieldNote}
            />
            <FeatureArtwork name={record.pokemon.name} artwork={record.artwork} />
            <FeatureMetrics stats={record.pokemon.stats} />
        </article>
    )
}

export default PokePresentationView
