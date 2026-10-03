import { PokeList } from '@utils/api/pokemon-list.types'

export type CatalogResultsProps = {
    error?: boolean
    loading: boolean
    hasMore: boolean
    items: PokeList[]
    favorites: string[]
    loadingMore: boolean
    waitingForTypes: boolean
    viewMode: 'grid' | 'list'
    onReset: () => void
    onRetry: () => void
    onLoadMore: () => void
    onToggleFavorite: (name: string) => void
    onTypesLoaded: (name: string, types: string[]) => void
}
