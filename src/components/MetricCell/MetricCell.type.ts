export type MetricCellProps = {
    value: string | number
    label: string
    detail?: string
    unit?: string
    variant?: 'morphometric' | 'telemetry'
}