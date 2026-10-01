export type CatalogControlsProps = {
    sortBy: 'number' | 'name'
    viewMode: 'grid' | 'list'
    favoritesOnly: boolean
    favoriteCount: number
    onSort: (value: 'number' | 'name') => void
    onView: (value: 'grid' | 'list') => void
    onFavorites: () => void
}
