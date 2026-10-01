import {
    AudioOutlined,
    FireOutlined,
    HeartFilled,
    HeartOutlined,
    RadarChartOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

import './DossierActions.css'
import { DossierActionsProps } from './DossierActions.type'

export const DossierActions = ({
    name,
    isFavorite,
    onToggleFavorite,
}: DossierActionsProps) => (
    <div className='dossier-actions'>
        <button
            className={`dossier-favorite${isFavorite ? ' is-active' : ''}`}
            type='button'
            aria-pressed={isFavorite}
            onClick={() => onToggleFavorite(name)}
        >
            {isFavorite ? <HeartFilled /> : <HeartOutlined />}
            {isFavorite ? 'Saved to archive' : 'Save specimen'}
        </button>
        <Link className='dossier-action-button' to='/list-pokemon'>
            <FireOutlined /> Standard Biology
        </Link>
        <button className='dossier-action-button' type='button'>
            <HeartOutlined /> Shiny Variant
        </button>
        <button className='dossier-action-button' type='button'>
            <AudioOutlined /> Cry Audio
        </button>
        <button className='dossier-action-button' type='button'>
            <RadarChartOutlined /> Thermal Scan
        </button>
    </div>
)
