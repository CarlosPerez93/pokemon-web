import { KeyMetrics, Metrics } from './metrics.type'

export const metrics = ({
    speciesCount,
    typeCount,
    apiStatus,
    favoriteCount,
}: KeyMetrics): Metrics[] => [
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
