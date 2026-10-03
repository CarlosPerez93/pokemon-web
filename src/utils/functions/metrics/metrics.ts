import { KeyMetrics, Metrics } from './metrics.type'

export const metrics = ({
    speciesCount,
    typeCount,
    apiStatus,
    favoriteCount,
}: KeyMetrics): Metrics[] => {
    const syncing = apiStatus === 'SYNCING'

    return [
        {
            value: speciesCount?.toLocaleString() ?? '—',
            label: 'REGISTERED SPECIES',
            detail: 'LIVE POKÉAPI INDEX',
            variant: 'telemetry',
            loading: syncing && speciesCount === undefined,
        },
        {
            value: typeCount?.toLocaleString() ?? '—',
            label: 'API TYPE RECORDS',
            detail: 'INCLUDES SPECIAL TYPES',
            variant: 'telemetry',
            loading: syncing && typeCount === undefined,
        },
        {
            value: apiStatus ?? '—',
            label: 'POKÉAPI STATUS',
            detail: 'SPECIES + TYPE ENDPOINTS',
            variant: 'telemetry',
        },
        {
            value: favoriteCount ?? '—',
            label: 'ARCHIVED FAVORITES',
            detail: 'SAVED ON THIS DEVICE',
            variant: 'telemetry',
        },
    ]
}
