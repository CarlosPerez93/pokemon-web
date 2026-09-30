import { CSSProperties, useCallback, useEffect } from 'react'
import { HeartFilled, HeartOutlined, ReloadOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import api from '../../api'
import { useGet } from '../../hooks/api/useGet'
import { ResponsePoke } from '../../utils/api/api.util'
import { POKEMON_TYPE_COLORS } from '../../utils/constants/pokemon.constants'

import './PokeCard.css'

type PokeCardProps = {
    url?: string
    name?: string
    isFavorite?: boolean
    onToggleFavorite?: (name: string) => void
    onTypesLoaded?: (name: string, types: string[]) => void
}

export const PokeCard = ({
    url,
    name: listedName,
    isFavorite,
    onToggleFavorite,
    onTypesLoaded,
}: PokeCardProps) => {
    const urlParts = url?.split('/').filter(Boolean) ?? []
    const pokemonIdentifier = listedName ?? urlParts[urlParts.length - 1] ?? ''
    const fetchPokemon = useCallback(
        () => api.pokemon.pokemon(pokemonIdentifier),
        [pokemonIdentifier],
    )
    const { data, loading, error, refetch } = useGet<ResponsePoke>(
        {
            functionFetch: fetchPokemon,
        },
        { cancelError: true },
    )

    const pokemonName = data?.name ?? listedName ?? 'unknown'
    const types = data?.types?.map(({ type }) => type.name) ?? []
    const primaryType = types[0] ?? 'normal'
    const typeColor =
        POKEMON_TYPE_COLORS[primaryType as keyof typeof POKEMON_TYPE_COLORS] ??
        '#64748b'
    const artwork =
        data?.sprites?.other?.['official-artwork']?.front_default ??
        data?.sprites?.other?.dream_world?.front_default ??
        data?.sprites?.front_default

    useEffect(() => {
        const loadedTypes = data?.types?.map(({ type }) => type.name) ?? []
        if (loadedTypes.length) onTypesLoaded?.(pokemonName, loadedTypes)
    }, [data?.types, onTypesLoaded, pokemonName])

    if (loading || (!data?.id && !error)) {
        return (
            <div
                className='pokemon-card-skeleton'
                aria-busy='true'
                aria-label={`Loading ${pokemonName}`}
            />
        )
    }

    if (error || !data) {
        return (
            <article className='pokemon-card pokemon-card--error' role='alert'>
                <span className='pokemon-card__index'>RECORD UNAVAILABLE</span>
                <strong>{pokemonName}</strong>
                <button
                    type='button'
                    onClick={() => refetch()}
                    aria-label={`Retry loading ${pokemonName}`}
                >
                    <ReloadOutlined /> Retry
                </button>
            </article>
        )
    }

    return (
        <article
            className='pokemon-card'
            data-type={primaryType}
            style={{ '--type-color': typeColor } as CSSProperties}
        >
            <div className='pokemon-card__topline'>
                <span className='pokemon-card__index'>
                    #{String(data.id).padStart(4, '0')}
                </span>
                <button
                    className={`favorite-button${isFavorite ? ' is-active' : ''}`}
                    type='button'
                    aria-label={`${isFavorite ? 'Remove' : 'Add'} ${pokemonName} ${isFavorite ? 'from' : 'to'} favorites`}
                    aria-pressed={isFavorite}
                    onClick={() => onToggleFavorite?.(pokemonName)}
                >
                    {isFavorite ? <HeartFilled /> : <HeartOutlined />}
                </button>
            </div>

            <div className='pokemon-card__art'>
                {artwork ? (
                    <Link
                        to={`/dossier/${pokemonName}`}
                        aria-label={`Open ${pokemonName} dossier`}
                    >
                        <img src={artwork} alt={pokemonName} loading='lazy' />
                    </Link>
                ) : (
                    <span aria-hidden='true'>?</span>
                )}
            </div>

            <div className='pokemon-card__details'>
                <h2>
                    <Link to={`/dossier/${pokemonName}`}>{pokemonName}</Link>
                </h2>
                <div className='type-badges' aria-label={`${pokemonName} types`}>
                    {data.types.map(({ type }) => (
                        <span
                            className={`type-badge type-badge--${type.name}`}
                            key={type.name}
                        >
                            <span aria-hidden='true' />
                            {type.name}
                        </span>
                    ))}
                </div>
                <div className='pokemon-card__stats' aria-label='Base stats'>
                    {data.stats.slice(0, 3).map(({ base_stat, stat }) => (
                        <div className='pokemon-card__stat' key={stat.name}>
                            <span>{stat.name.replace('-', ' ')}</span>
                            <span className='pokemon-card__stat-track'>
                                <span
                                    style={{
                                        width: `${Math.min(100, (base_stat / 255) * 100)}%`,
                                    }}
                                />
                            </span>
                            <strong>{base_stat}</strong>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    )
}

export default PokeCard
