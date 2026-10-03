import { CSSProperties } from 'react'

import { CombatTelemetry } from '@components/CombatTelemetry'
import { FieldJournal } from '@components/Dossier/FieldJournal'
import { DossierActions } from '@components/Dossier/DossierActions'
import { DossierArtwork } from '@components/Dossier/DossierArtwork'
import { DossierIdentity } from '@components/Dossier/DossierIdentity'
import { DossierTraitPanel } from '@components/Dossier/DossierTraitPanel'
import { DossierBreadcrumb } from '@components/Dossier/DossierBreadcrumb'
import { DossierMorphotype } from '@components/Dossier/DossierMorphotype'
import { DossierMoveArsenal } from '@components/Dossier/DossierMoveArsenal'
import { DossierEvolutionChain } from '@components/Dossier/DossierEvolutionChain'
import { DossierRecordNavigation } from '@components/Dossier/DossierRecordNavigation'
import DossierMorphotypeFacts from '@components/DossierMorphotypeFacts/DossierMorphotypeFacts'

import { useEvolutionChain } from '@hooks/useEvolutionChain'
import { DossierRecordProps } from '@utils/types/dossier.types'
import { POKEMON_TYPE_COLORS } from '@utils/constants/pokemon-type.constants'

import './DossierPage.css'

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

            <FieldJournal
                pokemon={props.pokemon}
                species={props.species}
                loading={props.speciesLoading}
            />
            <CombatTelemetry pokemon={props.pokemon} />
            <DossierEvolutionChain
                stages={evolution.stages}
                loading={evolution.loading || Boolean(props.speciesLoading)}
                currentId={props.pokemon.id}
            />
            <DossierMoveArsenal pokemon={props.pokemon} />
        </main>
    )
}

export default DossierPage
