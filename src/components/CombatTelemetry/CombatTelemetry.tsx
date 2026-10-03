import { AbilityList } from '@components/AbilityList'
import { CombatRadar } from '@components/CombatRadar'
import { CombatStatList } from '@components/CombatStatList'
import { ElementalVulnerabilityMatrix } from '@components/ElementalVulnerabilityMatrix'

import { CombatTelemetryProps } from './CombatTelemetry.type'

import './CombatTelemetry.css'

export const CombatTelemetry = ({ pokemon }: CombatTelemetryProps) => {
    const total = pokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0)

    return (
        <section className='dossier-combat-analysis' aria-label='Combat analysis'>
            <div className='dossier-biometrics'>
                <div className='dossier-analysis-heading'>
                    <div className='section-kicker'>
                        COMBAT BIOMETRICS & PHYSIOLOGICAL BASE STATS
                    </div>
                    <strong className='telemetry-score'>BST: {total}</strong>
                </div>
                <CombatStatList stats={pokemon.stats} />
            </div>
            <div className='dossier-radar-panel'>
                <div className='dossier-analysis-heading'>
                    <div className='section-kicker'>TACTICAL PROFILE RADAR</div>
                    <span className='dossier-analysis-version'>
                        HEX-POLYGON / V3.2
                    </span>
                </div>
                <CombatRadar stats={pokemon.stats} size='expanded' />
                <ElementalVulnerabilityMatrix
                    types={pokemon.types.map(({ type }) => type.name)}
                />
            </div>
            <AbilityList abilities={pokemon.abilities} />
        </section>
    )
}

export default CombatTelemetry
