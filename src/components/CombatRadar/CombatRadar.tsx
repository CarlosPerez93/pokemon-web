import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    Tooltip,
} from 'recharts'

import { useElementWidth } from '../../hooks/useElementWidth'
import { PokemonStatSlot } from '../../utils/api/pokemon-record.types'
import './CombatRadar.css'

type CombatRadarProps = {
    stats: PokemonStatSlot[]
}

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
                    <PolarGrid stroke='var(--color-border-strong)' />
                    <PolarAngleAxis
                        dataKey='axis'
                        tick={{ fill: 'var(--color-muted)', fontSize: 11 }}
                    />
                    <PolarRadiusAxis
                        angle={90}
                        domain={[0, 150]}
                        tickCount={4}
                        tick={{ fill: 'var(--color-muted)', fontSize: 9 }}
                    />
                    <Radar
                        dataKey='value'
                        name='Base stat'
                        stroke='#b80035'
                        fill='#b80035'
                        fillOpacity={0.18}
                    />
                    <Tooltip
                        allowEscapeViewBox={{ x: false, y: false }}
                        formatter={value => [value, 'Base stat']}
                    />
                </RadarChart>
            )}
        </div>
    )
}
