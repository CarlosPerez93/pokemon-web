import { CSSProperties } from 'react'

import { FeatureArtwork } from './FeatureArtwork'
import { FeatureDetails } from './FeatureDetails'
import { FeatureError } from './FeatureError'
import { FeatureMetrics } from './FeatureMetrics'
import { useFeaturedPokemon } from './useFeaturedPokemon'

import './PokePresentation.css'

type PokePresentationProps = {
    name: string
}

export const PokePresentationView = ({ name }: PokePresentationProps) => {
    const record = useFeaturedPokemon(name)
    if (record.loading || (!record.pokemon?.id && !record.error)) {
        return <div className='feature-skeleton' aria-busy='true' aria-label='Loading specimen' />
    }
    if (record.error || !record.pokemon?.id) return <FeatureError onRetry={() => record.refetch()} />

    return (
        <article className='feature-slide' data-type={record.primaryType} style={{ '--type-color': record.typeColor } as CSSProperties}>
            <FeatureDetails pokemon={record.pokemon} genus={record.genus} fieldNote={record.fieldNote} />
            <FeatureArtwork name={record.pokemon.name} artwork={record.artwork} />
            <FeatureMetrics stats={record.pokemon.stats} />
        </article>
    )
}

export default PokePresentationView
