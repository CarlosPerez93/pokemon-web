import { RadarChart, Tooltip } from 'recharts'

import { useElementWidth } from '../../hooks/useElementWidth'
import { CombatRadarProps } from './CombatRadar.type'
import { CombatRadarAxes } from './CombatRadarAxes'
import { CombatRadarSeries } from './CombatRadarSeries'
import './CombatRadar.css'

export const CombatRadar = ({ stats }: CombatRadarProps) => {
    const { ref, width } = useElementWidth<HTMLDivElement>()
    const data = stats.map(({ base_stat, stat }) => ({
        axis: stat.name.replace('-', ' '),
        value: base_stat,
    }))
    return (
        <div
            ref={ref}
            className='combat-radar'
            role='img'
            aria-label='Six-axis Pokémon combat stat radar chart'
        >
            {width > 0 && (
                <RadarChart
                    width={Math.floor(width)}
                    height={210}
                    data={data}
                    outerRadius='55%'
                >
                    <CombatRadarAxes />
                    <CombatRadarSeries />
                    <Tooltip
                        allowEscapeViewBox={{ x: false, y: false }}
                        formatter={value => [value, 'Base stat']}
                    />
                </RadarChart>
            )}
        </div>
    )
}
