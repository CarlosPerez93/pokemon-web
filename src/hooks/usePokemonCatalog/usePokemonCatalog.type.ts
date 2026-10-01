export type PokemonCatalogResult = {
    hasMore: boolean
    loading: boolean
    loadingMore: boolean
    error: boolean
    loadMore: () => void
    refetch: () => void
}
