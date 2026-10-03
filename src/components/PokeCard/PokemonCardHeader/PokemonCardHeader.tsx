import { HeartFilled, HeartOutlined } from '@ant-design/icons'

import { PokemonCardHeaderProps } from './PokemonCardHeader.type'

import './PokemonCardHeader.css'

export const PokemonCardHeader = ({
    id,
    name,
    isFavorite,
    onToggleFavorite,
}: PokemonCardHeaderProps) => (
    <div className='pokemon-card__topline'>
        <span className='pokemon-card__index'>#{String(id).padStart(4, '0')}</span>
        <button
            className={`favorite-button${isFavorite ? ' is-active' : ''}`}
            type='button'
            aria-label={`${isFavorite ? 'Remove' : 'Add'} ${name} ${isFavorite ? 'from' : 'to'} favorites`}
            aria-pressed={isFavorite}
            onClick={() => onToggleFavorite?.(name)}
        >
            {isFavorite ? <HeartFilled /> : <HeartOutlined />}
        </button>
    </div>
)
export default PokemonCardHeader
