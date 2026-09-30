import { Radar } from 'recharts'

export const CombatRadarSeries = () => (
    <Radar
        dataKey='value'
        name='Base stat'
        stroke='#b80035'
        fill='#b80035'
        fillOpacity={0.18}
    />
)
