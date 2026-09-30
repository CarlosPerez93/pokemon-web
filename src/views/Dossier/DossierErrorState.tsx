import { ReloadOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

type DossierErrorStateProps = {
    onRetry: () => void
}

export const DossierErrorState = ({ onRetry }: DossierErrorStateProps) => (
    <main className='dossier-page page-container'>
        <div className='dossier-state' role='alert'>
            <span className='section-kicker'>STATUS: OFFLINE_CACHE_ACTIVE</span>
            <h1>Specimen record unavailable</h1>
            <p>Retry the field index or return to the Pokédex.</p>
            <div>
                <button type='button' onClick={onRetry}>
                    <ReloadOutlined /> Retry connection
                </button>
                <Link to='/list-pokemon'>Explore Pokédex</Link>
            </div>
        </div>
    </main>
)
