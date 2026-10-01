import { CSSProperties } from 'react'

import { POKEMON_TYPE_COLORS } from '../../../utils/constants/pokemon-type.constants'
import { DossierRecordProps } from '../../../utils/types/dossier.types'
import { useEvolutionChain } from '../../../hooks/useEvolutionChain'
import { CombatTelemetry } from '@components/CombatTelemetry'

import './DossierPage.css'
import { DossierBreadcrumb } from '@components/Dossier/DossierBreadcrumb'
import { DossierIdentity } from '@components/Dossier/DossierIdentity'
import { DossierArtwork } from '@components/Dossier/DossierArtwork'
import { DossierDataStrip } from '@components/Dossier/DossierDataStrip'
import { DossierClassification } from '@components/Dossier/DossierClassification'
import { DossierEvolutionChain } from '@components/Dossier/DossierEvolutionChain'
import { DossierMoveArsenal } from '@components/Dossier/DossierMoveArsenal'
import { DossierRecordNavigation } from '@components/Dossier/DossierRecordNavigation'

export const DossierPage = (props: DossierRecordProps) => {
    const primaryType = props.pokemon.types[0]?.type.name ?? 'normal'
    const typeColor =
        POKEMON_TYPE_COLORS[primaryType as keyof typeof POKEMON_TYPE_COLORS] ??
        '#64748b'
    const evolution = useEvolutionChain(props.species?.evolution_chain?.url)

    return (
        <main className='dossier-page page-container'>
            <DossierBreadcrumb />
            <section
                className='dossier-hero'
                style={{ '--type-color': typeColor } as CSSProperties}
            >
                <DossierIdentity {...props} />
                <DossierArtwork pokemon={props.pokemon} />
                <CombatTelemetry pokemon={props.pokemon} />
            </section>
            <DossierDataStrip pokemon={props.pokemon} />
            <DossierClassification species={props.species} />
            <DossierEvolutionChain
                stages={evolution.stages}
                loading={evolution.loading}
                currentId={props.pokemon.id}
            />
            <DossierMoveArsenal pokemon={props.pokemon} />
            <DossierRecordNavigation id={props.pokemon.id} />
        </main>
    )
}
