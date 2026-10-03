import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { HeartOutlined } from '@ant-design/icons'
import ButtonGroup from 'antd/es/button/button-group'

import { ButtonsGroup } from '@components/ButtonsGroup'

import { DossierActionsProps } from './DossierActions.type'

import './DossierActions.css'

export const DossierActions = ({
    name,
    isFavorite,
    onToggleFavorite,
}: DossierActionsProps) => {
    return (
        <div className='dossier-actions'>
            <Link to='/favorites'>
                <Button className='dossier-action-button'>
                    <HeartOutlined /> Saved favorites
                </Button>
            </Link>
            <ButtonGroup>
                {ButtonsGroup({ isFavorite, name, onToggleFavorite }).map(btn => (
                    <Button
                        key={btn.label}
                        className='dossier-action-button'
                        onClick={btn.action}
                    >
                        {btn.icon} {btn.label}
                    </Button>
                ))}
            </ButtonGroup>
        </div>
    )
}

export default DossierActions
