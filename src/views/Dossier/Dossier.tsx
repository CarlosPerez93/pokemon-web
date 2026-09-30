import { CSSProperties, useCallback } from 'react'
import {
    ArrowLeftOutlined,
    ArrowRightOutlined,
    HeartFilled,
    HeartOutlined,
    ReloadOutlined,
} from '@ant-design/icons'
import { Link, useParams } from 'react-router-dom'

import api from '../../api'
import { useGet } from '../../hooks/api/useGet'
import { useFavorites } from '../../hooks/useFavorites'
import { PokemonSpecies, ResponsePoke } from '../../utils/api/api.util'
import { POKEMON_TYPE_COLORS } from '../../utils/constants/pokemon.constants'

import './Dossier.css'

const getArtwork = (pokemon: ResponsePoke) =>
    pokemon.sprites.other?.['official-artwork']?.front_default ??
    pokemon.sprites.other?.dream_world?.front_default ??
    pokemon.sprites.front_default

export const Dossier = () => {
    const { pokemonName = 'charizard' } = useParams()
    const fetchPokemon = useCallback(
        () => api.pokemon.pokemon(pokemonName),
        [pokemonName],
    )
    const fetchSpecies = useCallback(
        () => api.pokemon.species(pokemonName),
        [pokemonName],
    )
    const { data, loading, error, refetch } = useGet<ResponsePoke>(
        { functionFetch: fetchPokemon },
        { cancelError: true },
    )
    const { data: species } = useGet<PokemonSpecies>(
        { functionFetch: fetchSpecies },
        { cancelError: true },
    )
    const { favorites, toggleFavorite } = useFavorites()

    if (loading || (!data?.id && !error)) {
        return (
            <main className='dossier-page page-container'>
                <div
                    className='dossier-skeleton'
                    aria-busy='true'
                    aria-label='Loading specimen dossier'
                />
            </main>
        )
    }

    if (error || !data?.id) {
        return (
            <main className='dossier-page page-container'>
                <div className='dossier-state' role='alert'>
                    <span className='section-kicker'>
                        STATUS: OFFLINE_CACHE_ACTIVE
                    </span>
                    <h1>Specimen record unavailable</h1>
                    <p>Retry the field index or return to the Pokédex.</p>
                    <div>
                        <button type='button' onClick={() => refetch()}>
                            <ReloadOutlined /> Retry connection
                        </button>
                        <Link to='/list-pokemon'>Explore Pokédex</Link>
                    </div>
                </div>
            </main>
        )
    }

    const name = data.name
    const primaryType = data.types[0]?.type.name ?? 'normal'
    const typeColor =
        POKEMON_TYPE_COLORS[primaryType as keyof typeof POKEMON_TYPE_COLORS] ??
        '#64748b'
    const artwork = getArtwork(data)
    const favorite = favorites.includes(name)
    const genus = species?.genera?.find(
        ({ language }) => language.name === 'en',
    )?.genus
    const fieldNote = species?.flavor_text_entries
        ?.find(({ language }) => language.name === 'en')
        ?.flavor_text.replace(/[\n\f]/g, ' ')

    return (
        <main className='dossier-page page-container'>
            <div className='dossier-breadcrumb'>
                <Link to='/'>Home</Link>
                <span>/</span>
                <Link to='/list-pokemon'>Pokédex</Link>
                <span>/</span>
                <strong>Dossier</strong>
                <span className='dossier-breadcrumb__sector'>
                    FIELD OBSERVATION / RESEARCH ARCHIVE / KANTO SECTOR
                </span>
            </div>

            <section
                className='dossier-hero'
                style={{ '--type-color': typeColor } as CSSProperties}
            >
                <div className='dossier-copy'>
                    <div className='section-kicker'>
                        SPECIMEN FILE · NATIONAL INDEX
                    </div>
                    <div className='dossier-number'>
                        #{String(data.id).padStart(4, '0')}
                    </div>
                    <h1>{name}</h1>
                    <p className='dossier-species'>
                        {genus ?? 'Field specimen'} · Kanto
                    </p>
                    <div className='type-badges' aria-label={`${name} types`}>
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

                    <div className='dossier-morphometrics'>
                        <div>
                            <span>HEIGHT</span>
                            <strong>
                                {(data.height / 10).toFixed(1)} <small>m</small>
                            </strong>
                        </div>
                        <div>
                            <span>WEIGHT</span>
                            <strong>
                                {(data.weight / 10).toFixed(1)} <small>kg</small>
                            </strong>
                        </div>
                        <div>
                            <span>BASE STAT</span>
                            <strong>
                                {data.stats.reduce(
                                    (sum, stat) => sum + stat.base_stat,
                                    0,
                                )}
                            </strong>
                        </div>
                    </div>

                    <p className='dossier-note'>
                        {fieldNote ??
                            'High-resolution morphometrics, elemental classification, and combat telemetry for this registered species.'}
                        {species?.habitat?.name &&
                            ` Habitat: ${species.habitat.name.replace('-', ' ')}.`}
                    </p>
                    <div className='dossier-actions'>
                        <Link className='dossier-primary-action' to='/list-pokemon'>
                            Explore Pokédex <ArrowRightOutlined />
                        </Link>
                        <button
                            className={`dossier-favorite${favorite ? ' is-active' : ''}`}
                            type='button'
                            aria-pressed={favorite}
                            onClick={() => toggleFavorite(name)}
                        >
                            {favorite ? <HeartFilled /> : <HeartOutlined />}
                            {favorite ? 'Saved to archive' : 'Save specimen'}
                        </button>
                    </div>
                </div>

                <div
                    className='dossier-artwork'
                    aria-label={`${name} official artwork`}
                >
                    <span className='dossier-artwork__halo' />
                    <span className='dossier-artwork__index'>
                        REG-{String(data.id).padStart(4, '0')}
                    </span>
                    {artwork && <img src={artwork} alt={name} />}
                    <div className='dossier-artwork__caption'>
                        OFFICIAL BIOLOGICAL ARTWORK <span>GEN-I STANDARD</span>
                    </div>
                </div>

                <aside className='dossier-telemetry'>
                    <div className='section-kicker'>COMBAT TELEMETRY</div>
                    <strong className='telemetry-score'>
                        {data.stats.reduce((sum, stat) => sum + stat.base_stat, 0)}
                    </strong>
                    <span className='telemetry-caption'>TOTAL BASE STATS</span>
                    <div className='dossier-stat-list'>
                        {data.stats.map(({ base_stat, stat }) => (
                            <div className='dossier-stat' key={stat.name}>
                                <span>{stat.name.replace('-', ' ')}</span>
                                <span className='dossier-stat__track'>
                                    <span
                                        style={{
                                            width: `${Math.min(100, (base_stat / 150) * 100)}%`,
                                        }}
                                    />
                                </span>
                                <strong>{base_stat}</strong>
                            </div>
                        ))}
                    </div>
                    <div className='dossier-abilities'>
                        <span className='section-kicker'>INTRINSIC ABILITIES</span>
                        {data.abilities.map(({ ability, is_hidden }) => (
                            <span key={ability.name}>
                                {ability.name.replace('-', ' ')}
                                {is_hidden ? ' · hidden' : ''}
                            </span>
                        ))}
                    </div>
                </aside>
            </section>

            <section className='dossier-data-strip' aria-label='Registry telemetry'>
                <div>
                    <strong>18</strong>
                    <span>
                        ELEMENTAL TYPES
                        <br />
                        ALL MAPPED
                    </span>
                </div>
                <div>
                    <strong>{data.moves.length.toLocaleString()}</strong>
                    <span>
                        CATALOGED MOVES
                        <br />
                        SPECIES RECORD
                    </span>
                </div>
                <div>
                    <strong>{data.base_experience ?? '—'}</strong>
                    <span>
                        BASE EXPERIENCE
                        <br />
                        GROWTH TELEMETRY
                    </span>
                </div>
                <div>
                    <strong>ONLINE</strong>
                    <span>
                        LOCAL SENSOR CACHE
                        <br />
                        SYNCHRONIZED
                    </span>
                </div>
            </section>

            <nav
                className='dossier-record-nav'
                aria-label='Adjacent specimen records'
            >
                <span>RECORD TRAVEL</span>
                {data.id > 1 ? (
                    <Link to={`/dossier/${data.id - 1}`}>
                        <ArrowLeftOutlined /> #{String(data.id - 1).padStart(4, '0')}
                    </Link>
                ) : (
                    <span />
                )}
                <span className='dossier-record-nav__current'>
                    #{String(data.id).padStart(4, '0')}
                </span>
                <Link to={`/dossier/${data.id + 1}`}>
                    #{String(data.id + 1).padStart(4, '0')} <ArrowRightOutlined />
                </Link>
            </nav>
        </main>
    )
}

export default Dossier
