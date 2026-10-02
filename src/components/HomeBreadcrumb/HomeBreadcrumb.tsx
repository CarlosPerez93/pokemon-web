import { HomeBreadcrumbProps } from './HomeBreadcrumb.type'

import './HomeBreadcrumb.css'

export const HomeBreadcrumb = ({ speciesCount }: HomeBreadcrumbProps) => (
    <div className='home-breadcrumb'>
        FIELD OBSERVATION <span>/</span> RESEARCH ARCHIVE <span>/</span> KANTO SURVEY
        SECTOR
        <span className='home-live-status'>
            <i /> TELEMETRY LOCK: ACTIVE · SPECIES INDEXED:{' '}
            {speciesCount?.toLocaleString() ?? '—'}
        </span>
    </div>
)
