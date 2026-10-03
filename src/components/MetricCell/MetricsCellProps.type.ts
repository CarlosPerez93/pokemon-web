export type MetricsCellProps = {
    value: string | number
    label: string
    detail?: string
    unit?: string
    variant?: 'morphometric' | 'telemetry'
    loading?: boolean
}
