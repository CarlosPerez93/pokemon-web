import { ReloadOutlined } from '@ant-design/icons'
import { Skeleton } from 'antd'

import { PokemonCardStateProps } from './PokemonCardState.type'

import './PokemonCardState.css'

export const PokemonCardSkeleton = ({
    name,
}: Partial<Pick<PokemonCardStateProps, 'name'>>) => (
    <article
        className='pokemon-card pokemon-card--loading'
        aria-busy='true'
        aria-label={name ? `Loading ${name}` : undefined}
    >
        <Skeleton.Input active size='small' block />
        <Skeleton.Image active style={{ width: '100%', height: 108 }} />
        <Skeleton active title={{ width: '60%' }} paragraph={{ rows: 3 }} />
    </article>
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
