type CatalogEmptyStateProps = {
    waitingForTypes: boolean
    onReset: () => void
}

export const CatalogEmptyState = ({
    waitingForTypes,
    onReset,
}: CatalogEmptyStateProps) => (
    <div className='catalog-state catalog-state--empty'>
        <span className='empty-radar' aria-hidden='true'>
            <span />
        </span>
        <strong>
            {waitingForTypes ? 'Classifying specimens' : 'Specimen unindexed'}
        </strong>
        <span>
            {waitingForTypes
                ? 'Type records are still syncing.'
                : 'No Pokémon match the active search and filters.'}
        </span>
        <button type='button' onClick={onReset}>
            Reset filters
        </button>
    </div>
)
