import { Skeleton } from 'antd'

import { CatalogTitleProps } from './CatalogTitle.type'

import './CatalogTitle.css'

export const CatalogTitle = ({ data, loading }: CatalogTitleProps) => (
    <section className='catalog-intro' aria-labelledby='catalog-title'>
        <div className='section-kicker'>02 / NATIONAL SPECIMEN ARCHIVE</div>
        <div className='catalog-title-row'>
            <div>
                <h1 id='catalog-title'>Pokédex Codex</h1>
                <p>Search, classify, and inspect the living species index.</p>
            </div>
            <div
                className='catalog-count'
                aria-label={`${data?.count ?? 0} species in index`}
                aria-busy={loading || undefined}
            >
                <strong>
                    {loading ? (
                        <Skeleton.Input
                            active
                            size='small'
                            style={{ width: 56, minWidth: 56 }}
                        />
                    ) : (
                        (data?.count?.toLocaleString() ?? '—')
                    )}
                </strong>
                <span>INDEXED</span>
            </div>
        </div>
    </section>
)

export default CatalogTitle
