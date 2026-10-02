export type CatalogControlsProps = {
    sortBy: 'number' | 'name'
    viewMode: 'grid' | 'list'
    favoriteCount: number
    onSort: (value: 'number' | 'name') => void
    onView: (value: 'grid' | 'list') => void
}
