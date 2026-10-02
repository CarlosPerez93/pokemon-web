import type { MetricsCellProps } from './MetricsCellProps.type'

import './MetricCell.css'

export const MetricCell = ({
    value,
    label,
    detail,
    unit,
    variant = 'morphometric',
}: MetricsCellProps) => (
    <div className={`metric-cell metric-cell--${variant}`}>
        {variant === 'telemetry' ? (
            <>
                <strong>{value}</strong>
                <span>{label}</span>
                {detail && <i>{detail}</i>}
            </>
        ) : (
            <>
                <span>{label}</span>
                <strong>
                    {value} {unit && <small>{unit}</small>}
                </strong>
            </>
        )}
    </div>
)
