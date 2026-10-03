import { CombatRadar } from '../../CombatRadar/CombatRadar'

import { FeatureMetricsProps } from './FeatureMetrics.type'
import { PokemonStatSlot } from '../../../utils/api/pokemon-record.types'

import './FeatureMetrics.css'

export const FeatureMetrics = ({ stats }: FeatureMetricsProps) => {
    const totalStats = (stats: PokemonStatSlot[]) =>
        stats.reduce((total, stat) => total + stat.base_stat, 0)
    const topStats = (stats: PokemonStatSlot[]) =>
        stats
            .filter(({ stat }) =>
                ['attack', 'special-attack', 'speed'].includes(stat.name),
            )
            .sort((first, second) => second.base_stat - first.base_stat)

    return (
        <aside className='feature-slide__stats' aria-label='Combat telemetry'>
            <span className='section-kicker'>COMBAT TELEMETRY</span>
            <strong className='feature-telemetry-score'>{totalStats(stats)}</strong>
            <span className='feature-telemetry-caption'>
                TOTAL BASE STATS · PEAK OFFENSE
            </span>
            <CombatRadar stats={stats} />
            <div className='feature-peak-stats'>
                {topStats(stats).map(({ base_stat, stat }) => (
                    <div className='metric-row' key={stat.name}>
                        <span>{stat.name.replace('-', ' ')}</span>
                        <span className='metric-track'>
                            <span
                                style={{
                                    width: `${Math.min(100, (base_stat / 150) * 100)}%`,
                                }}
                            />
                        </span>
                        <strong>{base_stat}</strong>
                    </div>
                ))}
            </div>
        </aside>
    )
}

export default FeatureMetrics
