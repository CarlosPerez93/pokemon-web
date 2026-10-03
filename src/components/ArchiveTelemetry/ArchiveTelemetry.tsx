import { MetricCell } from '@components/MetricCell'

import { metrics } from '@utils/functions/metrics/metrics'
import { ArchiveTelemetryProps } from './ArchiveTelemetry.type'

import './ArchiveTelemetry.css'

export const ArchiveTelemetry = ({
    speciesCount,
    favoriteCount,
    typeCount,
    apiStatus,
}: ArchiveTelemetryProps) => {
    const telemetryMetrics = metrics({
        speciesCount,
        favoriteCount,
        typeCount,
        apiStatus,
    }).map(metric => <MetricCell key={metric.label} {...metric} />)

    return (
        <section className='home-telemetry' aria-label='Archive status'>
            {telemetryMetrics}
        </section>
    )
}

export default ArchiveTelemetry
