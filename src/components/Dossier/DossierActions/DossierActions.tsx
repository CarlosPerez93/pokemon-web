import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { HeartOutlined } from '@ant-design/icons'
import ButtonGroup from 'antd/es/button/button-group'

import { ButtonsGroup } from '@components/ButtonsGroup'

import { usePokemonCry } from '@hooks/usePokemonCry'
import { DossierActionsProps } from './DossierActions.type'

import './DossierActions.css'

export const DossierActions = ({
    name,
    isFavorite,
    cries,
    onToggleFavorite,
}: DossierActionsProps) => {
    const cry = usePokemonCry(cries)

    return (
        <div className='dossier-actions'>
            <Link to='/favorites'>
                <Button className='dossier-action-button'>
                    <HeartOutlined /> Saved favorites
                </Button>
            </Link>
            <ButtonGroup>
                {ButtonsGroup({
                    isFavorite,
                    name,
                    onToggleFavorite,
                    hasCry: cry.hasCry,
                    isCryPlaying: cry.isPlaying,
                    onPlayCry: cry.play,
                }).map(btn => (
                    <Button
                        key={btn.label}
                        className='dossier-action-button'
                        disabled={btn.disabled}
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
