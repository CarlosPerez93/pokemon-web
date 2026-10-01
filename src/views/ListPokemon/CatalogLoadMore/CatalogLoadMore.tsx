import { ButtonApp } from '../../../components/ButtonApp'

import './CatalogLoadMore.css'

type CatalogLoadMoreProps = {
    hasMore: boolean
    loadingMore: boolean
    onLoadMore: () => void
}

export const CatalogLoadMore = ({
    hasMore,
    loadingMore,
    onLoadMore,
}: CatalogLoadMoreProps) => {
    if (!hasMore) return null

    return (
        <div className='catalog-load-more'>
            <ButtonApp className='catalog-load-more__action' onClick={onLoadMore}>
                {loadingMore ? 'Syncing more specimens…' : 'Load more specimens'}
            </ButtonApp>
        </div>
    )
}
