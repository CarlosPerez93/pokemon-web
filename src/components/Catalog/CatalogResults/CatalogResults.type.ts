import { PokeList } from '../../../utils/api/pokemon-list.types'

export type CatalogResultsProps = {
    items: PokeList[]
    loading: boolean
    error?: boolean
    waitingForTypes: boolean
    favorites: string[]
    viewMode: 'grid' | 'list'
    hasMore: boolean
    loadingMore: boolean
    onLoadMore: () => void
    onRetry: () => void
    onReset: () => void
    onToggleFavorite: (name: string) => void
    onTypesLoaded: (name: string, types: string[]) => void
}
