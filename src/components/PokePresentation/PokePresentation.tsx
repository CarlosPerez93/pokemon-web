import { CSSProperties, useCallback } from 'react'
import { ArrowRightOutlined, ReloadOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import api from '../../api'
import { useGet } from '../../hooks/api/useGet'
import { PokemonSpecies, ResponsePoke } from '../../utils/api/api.util'
import { POKEMON_TYPE_COLORS } from '../../utils/constants/pokemon.constants'

import './PokePresentation.css'

export const PokePresentation = ({ name }: { name: string }) => {
    const fetchPokemon = useCallback(() => api.pokemon.pokemon(name), [name])
    const fetchSpecies = useCallback(() => api.pokemon.species(name), [name])
    const { data, loading, error, refetch } = useGet<ResponsePoke>(
        {
            functionFetch: fetchPokemon,
        },
        { cancelError: true },
    )
    const { data: species } = useGet<PokemonSpecies>(
        { functionFetch: fetchSpecies },
        { cancelError: true },
    )

    const primaryType = data?.types?.[0]?.type.name ?? 'normal'
    const typeColor =
        POKEMON_TYPE_COLORS[primaryType as keyof typeof POKEMON_TYPE_COLORS] ??
        '#64748b'
    const artwork =
        data?.sprites?.other?.['official-artwork']?.front_default ??
        data?.sprites?.other?.dream_world?.front_default ??
        data?.sprites?.front_default
    const genus = species?.genera?.find(
        ({ language }) => language.name === 'en',
    )?.genus
    const fieldNote = species?.flavor_text_entries
        ?.find(({ language }) => language.name === 'en')
        ?.flavor_text.replace(/[\n\f]/g, ' ')

    if (loading || (!data?.id && !error)) {
        return (
            <div
                className='feature-skeleton'
                aria-busy='true'
                aria-label='Loading specimen'
            />
        )
    }

    if (error || !data) {
        return (
            <div className='feature-error' role='alert'>
                <span>Specimen record could not be loaded.</span>
                <button
                    type='button'
                    onClick={() => refetch()}
                    aria-label='Retry loading specimen'
                >
                    <ReloadOutlined /> Retry
                </button>
            </div>
        )
    }

    return (
        <article
            className='feature-slide'
            data-type={primaryType}
            style={{ '--type-color': typeColor } as CSSProperties}
        >
            <div className='feature-slide__copy'>
                <div className='specimen-index'>
                    <span>SPECIMEN INDEX</span>
                    <strong>#{String(data.id).padStart(4, '0')}</strong>
                </div>
                <h1>{data.name ?? name}</h1>
                <p className='feature-slide__description'>
                    {genus ?? 'Kanto field specimen'} · Kanto sector
                </p>
                <div className='type-badges' aria-label='Pokémon types'>
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
                <dl className='feature-facts'>
                    <div>
                        <dt>Height</dt>
                        <dd>{(data.height / 10).toFixed(1)} m</dd>
                    </div>
                    <div>
                        <dt>Weight</dt>
                        <dd>{(data.weight / 10).toFixed(1)} kg</dd>
                    </div>
                    <div>
                        <dt>Base XP</dt>
                        <dd>{data.base_experience ?? '—'}</dd>
                    </div>
                </dl>
                <p className='feature-slide__note'>
                    {fieldNote ??
                        'A high-priority specimen in the Kanto research archive.'}
                </p>
                <Link className='feature-link' to={`/dossier/${data.name}`}>
                    View full dossier <ArrowRightOutlined aria-hidden='true' />
                </Link>
            </div>

            <div className='feature-slide__art' aria-hidden='true'>
                <span className='art-orbit art-orbit--outer' />
                <span className='art-orbit art-orbit--inner' />
                {artwork && <img src={artwork} alt={data.name} />}
                <Link className='feature-slide__art-link' to='/list-pokemon'>
                    Explore Pokédex
                </Link>
            </div>

            <div className='feature-slide__stats' aria-label='Base stats'>
                <span className='section-kicker'>FIELD METRICS</span>
                {data.stats.map(({ base_stat, stat }) => (
                    <div className='metric-row' key={stat.name}>
                        <span>{stat.name.replace('-', ' ')}</span>
                        <span className='metric-track'>
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
        </article>
    )
}

export default PokePresentation
