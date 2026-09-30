import { CSSProperties } from 'react'

import { POKEMON_TYPE_COLORS } from '../../utils/constants/pokemon-type.constants'
import { DossierRecordProps } from './dossier.types'
import { DossierArtwork } from './DossierArtwork'
import { DossierBreadcrumb } from './DossierBreadcrumb'
import { DossierDataStrip } from './DossierDataStrip'
import { DossierIdentity } from './DossierIdentity'
import { DossierRecordNavigation } from './DossierRecordNavigation'
import { CombatTelemetry } from './CombatTelemetry'

export const DossierPage = (props: DossierRecordProps) => {
    const primaryType = props.pokemon.types[0]?.type.name ?? 'normal'
    const typeColor =
        POKEMON_TYPE_COLORS[primaryType as keyof typeof POKEMON_TYPE_COLORS] ??
        '#64748b'

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
            <DossierRecordNavigation id={props.pokemon.id} />
        </main>
    )
}
