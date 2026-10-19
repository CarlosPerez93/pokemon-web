import { CSSProperties } from 'react'
import { Skeleton } from 'antd'

import { FeatureError } from '@components/PokePresentation/FeatureError'
import { FeatureMetrics } from '@components/PokePresentation/FeatureMetrics'
import { FeatureDetails } from '@components/PokePresentation/FeatureDetails'
import { FeatureArtwork } from '@components/PokePresentation/FeatureArtwork'

import { useFeaturedPokemon } from '@hooks/useFeaturedPokemon'
import { PokePresentationProps } from './PokePresentationView.type'

import './PokePresentationView.css'
import DossierActions from '@components/Dossier/DossierActions'
import { useFavorites } from '@hooks/useFavorites'

export const PokePresentationView = ({
    name,
    actions = false,
}: PokePresentationProps) => {
    const record = useFeaturedPokemon(name)
    const { favorites, toggleFavorite } = useFavorites()
    if (record.loading || (!record.pokemon?.id && !record.error)) {
        return (
            <article
                className='feature-slide feature-slide--loading'
                aria-busy='true'
                aria-label='Loading specimen'
            >
                <Skeleton active title={{ width: '45%' }} paragraph={{ rows: 5 }} />
                <Skeleton.Image active style={{ width: '100%', height: 220 }} />
                <Skeleton active paragraph={{ rows: 4 }} />
            </article>
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
            {actions && (
                <div className='dossier-hero-left'>
                    <DossierActions
                        name={record.pokemon.name}
                        isFavorite={favorites.includes(record.pokemon.name)}
                        cries={record.pokemon.cries}
                        onToggleFavorite={toggleFavorite}
                    />
                </div>
            )}
            <FeatureArtwork name={record.pokemon.name} artwork={record.artwork} />
            <FeatureMetrics stats={record.pokemon.stats} />
        </article>
    )
}

export default PokePresentationView
