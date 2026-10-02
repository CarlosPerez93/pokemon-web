import { MetricCell, MetricCellProps } from '@components/MetricCell'

import './ArchiveTelemetry.css'

import { ArchiveTelemetryProps } from './ArchiveTelemetry.type'

export const ArchiveTelemetry = ({
    speciesCount,
    favoriteCount,
    typeCount,
    apiStatus,
}: ArchiveTelemetryProps) => {
    const metrics: MetricCellProps[] = [
        {
            value: speciesCount?.toLocaleString() ?? '—',
            label: 'REGISTERED SPECIES',
            detail: 'LIVE POKÉAPI INDEX',
            variant: 'telemetry',
        },
        {
            value: typeCount?.toLocaleString() ?? '—',
            label: 'API TYPE RECORDS',
            detail: 'INCLUDES SPECIAL TYPES',
            variant: 'telemetry',
        },
        {
            value: apiStatus,
            label: 'POKÉAPI STATUS',
            detail: 'SPECIES + TYPE ENDPOINTS',
            variant: 'telemetry',
        },
        {
            value: favoriteCount,
            label: 'ARCHIVED FAVORITES',
            detail: 'SAVED ON THIS DEVICE',
            variant: 'telemetry',
        },
    ]

    return (
        <section className='home-telemetry' aria-label='Archive status'>
            {metrics.map(metric => (
                <MetricCell key={metric.label} {...metric} />
            ))}
        </section>
    )
}
