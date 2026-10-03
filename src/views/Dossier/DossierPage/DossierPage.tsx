import { CSSProperties } from 'react'

import { POKEMON_TYPE_COLORS } from '../../../utils/constants/pokemon-type.constants'
import { DossierRecordProps } from '../../../utils/types/dossier.types'
import { useEvolutionChain } from '../../../hooks/useEvolutionChain'
import { CombatTelemetry } from '@components/CombatTelemetry'

import './DossierPage.css'
import { DossierBreadcrumb } from '@components/Dossier/DossierBreadcrumb'
import { DossierIdentity } from '@components/Dossier/DossierIdentity'
import { DossierActions } from '@components/Dossier/DossierActions'
import { DossierArtwork } from '@components/Dossier/DossierArtwork'
import { DossierEvolutionChain } from '@components/Dossier/DossierEvolutionChain'
import { DossierMoveArsenal } from '@components/Dossier/DossierMoveArsenal'
import { DossierRecordNavigation } from '@components/Dossier/DossierRecordNavigation'
import { FieldJournal } from '@components/Dossier/FieldJournal'
import { DossierMorphotype } from '@components/Dossier/DossierMorphotype'
import { DossierTraitPanel } from '@components/Dossier/DossierTraitPanel'
import DossierMorphotypeFacts from '@components/DossierMorphotypeFacts/DossierMorphotypeFacts'

export const DossierPage = (props: DossierRecordProps) => {
    const primaryType = props.pokemon.types[0]?.type.name ?? 'normal'
    const typeColor =
        POKEMON_TYPE_COLORS[primaryType as keyof typeof POKEMON_TYPE_COLORS] ??
        '#64748b'
    const evolution = useEvolutionChain(props.species?.evolution_chain?.url)

    return (
        <main className='dossier-page page-container'>
            <DossierBreadcrumb />
            <DossierRecordNavigation id={props.pokemon.id} />
            <section
                className='dossier-hero'
                style={{ '--type-color': typeColor } as CSSProperties}
            >
                <div className='dossier-hero-left'>
                    <DossierIdentity {...props} />
                    <DossierArtwork pokemon={props.pokemon} />
                    <DossierActions
                        name={props.pokemon.name}
                        isFavorite={props.isFavorite}
                        onToggleFavorite={props.onToggleFavorite}
                    />
                </div>
                <div className='dossier-hero-right'>
                    <DossierMorphotype {...props} />
                    <DossierMorphotypeFacts {...props} />
                    <DossierTraitPanel abilities={props.pokemon.abilities} />
                </div>
            </section>

            <FieldJournal pokemon={props.pokemon} species={props.species} />
            <CombatTelemetry pokemon={props.pokemon} />
            <DossierEvolutionChain
                stages={evolution.stages}
                loading={evolution.loading}
                currentId={props.pokemon.id}
            />
            <DossierMoveArsenal pokemon={props.pokemon} />
        </main>
    )
}
