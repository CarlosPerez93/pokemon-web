import './HomeBreadcrumb.css'

type HomeBreadcrumbProps = {
    queueSize?: number
}

export const HomeBreadcrumb = ({ queueSize }: HomeBreadcrumbProps) => (
    <div className='home-breadcrumb'>
        FIELD OBSERVATION <span>/</span> RESEARCH ARCHIVE <span>/</span> KANTO SURVEY
        SECTOR
        <span className='home-live-status'>
            <i /> TELEMETRY LOCK: ACTIVE · SPECIMEN QUEUE:{' '}
            {queueSize?.toLocaleString() ?? '—'}
        </span>
    </div>
)
