import { ReloadOutlined } from '@ant-design/icons'

import { PokemonCardStateProps } from './PokemonCardState.type'

import './PokemonCardState.css'

export const PokemonCardSkeleton = ({
    name,
}: Pick<PokemonCardStateProps, 'name'>) => (
    <div
        className='pokemon-card-skeleton'
        aria-busy='true'
        aria-label={`Loading ${name}`}
    />
)

export const PokemonCardState = ({ name, onRetry }: PokemonCardStateProps) => (
    <article className='pokemon-card pokemon-card--error' role='alert'>
        <span className='pokemon-card__index'>RECORD UNAVAILABLE</span>
        <strong>{name}</strong>
        <button type='button' onClick={onRetry} aria-label={`Retry loading ${name}`}>
            <ReloadOutlined /> Retry
        </button>
    </article>
)

export default {
    PokemonCardSkeleton,
    PokemonCardState,
}
