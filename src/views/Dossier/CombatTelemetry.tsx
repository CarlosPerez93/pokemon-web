import { ResponsePoke } from '../../utils/api/api.util'

import { AbilityList } from './AbilityList'
import { CombatRadar } from '../../components/CombatRadar/CombatRadar'
import { CombatStatList } from './CombatStatList'

type CombatTelemetryProps = {
    pokemon: ResponsePoke
}

export const CombatTelemetry = ({ pokemon }: CombatTelemetryProps) => {
    const total = pokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0)

    return (
        <aside className='dossier-telemetry' aria-label='Combat telemetry'>
            <div className='section-kicker'>COMBAT TELEMETRY</div>
            <strong className='telemetry-score'>{total}</strong>
            <span className='telemetry-caption'>TOTAL BASE STATS</span>
            <CombatRadar stats={pokemon.stats} />
            <CombatStatList stats={pokemon.stats} />
            <AbilityList abilities={pokemon.abilities} />
        </aside>
    )
}
