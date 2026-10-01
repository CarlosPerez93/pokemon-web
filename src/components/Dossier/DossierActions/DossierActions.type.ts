export type DossierActionsProps = {
    name: string
    isFavorite: boolean
    onToggleFavorite: (name: string) => void
}
