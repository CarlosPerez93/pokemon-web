type ArchiveTelemetryProps = {
    speciesCount?: number
    favoriteCount: number
    typeCount: number
}

export const ArchiveTelemetry = ({
    speciesCount,
    favoriteCount,
    typeCount,
}: ArchiveTelemetryProps) => (
    <section className='home-telemetry' aria-label='Archive status'>
        <Metric
            value={speciesCount?.toLocaleString() ?? '—'}
            label='REGISTERED SPECIES'
            detail='SYNC 99.8%'
        />
        <Metric value={typeCount} label='ELEMENTAL TYPES' detail='ALL MAPPED' />
        <Metric value='ONLINE' label='LOCAL SENSOR CACHE' detail='SYNCHRONIZED' />
        <Metric
            value={favoriteCount}
            label='ARCHIVED FAVORITES'
            detail='FIELD NOTES'
        />
    </section>
)

const Metric = ({
    value,
    label,
    detail,
}: {
    value: string | number
    label: string
    detail: string
}) => (
    <div>
        <strong>{value}</strong>
        <span>{label}</span>
        <i>{detail}</i>
    </div>
)
