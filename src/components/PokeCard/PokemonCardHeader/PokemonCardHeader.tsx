import { HeartFilled, HeartOutlined } from '@ant-design/icons'

import './PokemonCardHeader.css'

type PokemonCardHeaderProps = {
    id: number
    name: string
    isFavorite?: boolean
    onToggleFavorite?: (name: string) => void
}

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
