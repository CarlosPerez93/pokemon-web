import { ArrowRightOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import './DossierActions.css'

type DossierActionsProps = {
    name: string
    isFavorite: boolean
    onToggleFavorite: (name: string) => void
}

export const DossierActions = ({
    name,
    isFavorite,
    onToggleFavorite,
}: DossierActionsProps) => (
    <div className='dossier-actions'>
        <Link className='dossier-primary-action' to='/list-pokemon'>
            Explore Pokédex <ArrowRightOutlined />
        </Link>
        <button
            className={`dossier-favorite${isFavorite ? ' is-active' : ''}`}
            type='button'
            aria-pressed={isFavorite}
            onClick={() => onToggleFavorite(name)}
        >
            {isFavorite ? <HeartFilled /> : <HeartOutlined />}
            {isFavorite ? 'Saved to archive' : 'Save specimen'}
        </button>
    </div>
)
