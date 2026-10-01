import { MetricCell } from '@components/MetricCell'
import './ArchiveTelemetry.css'

import { ArchiveTelemetryProps } from './ArchiveTelemetry.type'

export const ArchiveTelemetry = ({
    speciesCount,
    favoriteCount,
    typeCount,
}: ArchiveTelemetryProps) => (
    <section className='home-telemetry' aria-label='Archive status'>
        <MetricCell
            value={speciesCount?.toLocaleString() ?? '—'}
            label='REGISTERED SPECIES'
            detail='SYNC 99.8%'
            variant='telemetry'
        />
        <MetricCell
            value={typeCount}
            label='ELEMENTAL TYPES'
            detail='ALL MAPPED'
            variant='telemetry'
        />
        <MetricCell
            value='ONLINE'
            label='LOCAL SENSOR CACHE'
            detail='SYNCHRONIZED'
            variant='telemetry'
        />
        <MetricCell
            value={favoriteCount}
            label='ARCHIVED FAVORITES'
            detail='FIELD NOTES'
            variant='telemetry'
        />
    </section>
)
