import { Skeleton } from 'antd'

import { HomeBreadcrumbProps } from './HomeBreadcrumb.type'

import './HomeBreadcrumb.css'

export const HomeBreadcrumb = ({ speciesCount, loading }: HomeBreadcrumbProps) => (
    <div className='home-breadcrumb'>
        FIELD OBSERVATION <span>/</span> RESEARCH ARCHIVE <span>/</span> KANTO SURVEY
        SECTOR
        <span className='home-live-status'>
            <i /> TELEMETRY LOCK: ACTIVE · SPECIES INDEXED:{' '}
            {loading ? (
                <Skeleton.Input
                    active
                    size='small'
                    style={{ width: 48, minWidth: 48, height: 14 }}
                />
            ) : (
                (speciesCount?.toLocaleString() ?? '—')
            )}
        </span>
    </div>
)

export default HomeBreadcrumb
