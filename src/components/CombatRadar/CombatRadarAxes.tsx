import { PolarAngleAxis, PolarGrid, PolarRadiusAxis } from 'recharts'

export const CombatRadarAxes = () => (
    <>
        <PolarGrid stroke='var(--color-border-strong)' />
        <PolarAngleAxis
            dataKey='axis'
            tick={{ fill: 'var(--color-muted)', fontSize: 12 }}
        />
        <PolarRadiusAxis
            angle={90}
            domain={[0, 150]}
            tickCount={4}
            tick={{ fill: 'var(--color-muted)', fontSize: 12 }}
        />
    </>
)
