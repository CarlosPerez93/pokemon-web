import { Skeleton } from 'antd'

import type { MetricsCellProps } from './MetricsCellProps.type'

import './MetricCell.css'

export const MetricCell = ({
    value,
    label,
    detail,
    unit,
    variant = 'morphometric',
    loading = false,
}: MetricsCellProps) => {
    const display = loading ? (
        <Skeleton.Input active size='small' style={{ width: 48, minWidth: 48 }} />
    ) : (
        value
    )

    return (
        <div
            className={`metric-cell metric-cell--${variant}`}
            aria-busy={loading || undefined}
        >
            {variant === 'telemetry' ? (
                <>
                    <strong>{display}</strong>
                    <span>{label}</span>
                    {detail && <i>{detail}</i>}
                </>
            ) : (
                <>
                    <span>{label}</span>
                    <strong>
                        {display} {!loading && unit && <small>{unit}</small>}
                    </strong>
                </>
            )}
        </div>
    )
}

export default MetricCell
