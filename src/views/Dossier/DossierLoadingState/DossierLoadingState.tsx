import './DossierLoadingState.css'

export const DossierLoadingState = () => (
    <main className='dossier-page page-container'>
        <div
            className='dossier-skeleton'
            aria-busy='true'
            aria-label='Loading specimen dossier'
        />
    </main>
)
