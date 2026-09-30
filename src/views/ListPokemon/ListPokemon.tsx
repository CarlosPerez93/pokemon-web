import { useCallback, useRef, useState } from 'react'
import {
    AppstoreOutlined,
    BarsOutlined,
    HeartFilled,
    HeartOutlined,
    ReloadOutlined,
    SearchOutlined,
} from '@ant-design/icons'

import PokeCard from '@components/PokeCard'

import api from '../../api'
import { useGet } from '@hooks/api/useGet'
import { useFavorites } from '@hooks/useFavorites'
import { useSearch } from '@hooks/useSearch'
import { PokeList, ResponseFetch } from '@utils/api/api.util'
import {
    POKEMON_TYPE_COLORS,
    POKEMON_TYPE_NAMES,
} from '@utils/constants/pokemon.constants'

import './ListPokemon.css'

export const ListPokemon = () => {
    const { data, loading, error, refetch } = useGet<ResponseFetch>({
        functionFetch: api.pokemon.pokemonList,
    })
    const [pokemon, setPokemon] = useState('')
    const [selectedType, setSelectedType] = useState('all')
    const [favoritesOnly, setFavoritesOnly] = useState(false)
    const [loadedTypes, setLoadedTypes] = useState<Record<string, string[]>>({})
    const [sortBy, setSortBy] = useState<'number' | 'name'>('number')
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
    const searchRef = useRef<HTMLInputElement>(null)
    const { favorites, toggleFavorite } = useFavorites()

    const handleTypesLoaded = useCallback((name: string, types: string[]) => {
        setLoadedTypes(currentTypes => {
            const previousTypes = currentTypes[name]
            if (
                previousTypes?.length === types.length &&
                previousTypes.every((type, index) => type === types[index])
            ) {
                return currentTypes
            }
            return { ...currentTypes, [name]: types }
        })
    }, [])

    const searchResults = useSearch({ data, stateFilter: pokemon })?.filter(
        ({ name }: PokeList) => !favoritesOnly || favorites.includes(name ?? ''),
    )
    const sortedResults = [...(searchResults ?? [])].sort((first, second) => {
        if (sortBy === 'name')
            return (first.name ?? '').localeCompare(second.name ?? '')
        const firstNumber = Number(first.url.split('/').filter(Boolean).pop())
        const secondNumber = Number(second.url.split('/').filter(Boolean).pop())
        return firstNumber - secondNumber
    })
    const visiblePokemon = sortedResults.filter(
        ({ name }: PokeList) =>
            selectedType === 'all' ||
            !loadedTypes[name ?? ''] ||
            loadedTypes[name ?? ''].includes(selectedType),
    )
    const waitingForTypeData =
        selectedType !== 'all' &&
        searchResults?.some(({ name }: PokeList) => !loadedTypes[name ?? ''])

    return (
        <main className='pokemon-page page-container'>
            <section className='catalog-intro' aria-labelledby='catalog-title'>
                <div className='section-kicker'>02 / NATIONAL SPECIMEN ARCHIVE</div>
                <div className='catalog-title-row'>
                    <div>
                        <h1 id='catalog-title'>Pokédex Codex</h1>
                        <p>
                            Search, classify, and inspect the living species index.
                        </p>
                    </div>
                    <div
                        className='catalog-count'
                        aria-label={`${data?.count ?? 0} species in index`}
                    >
                        <strong>{data?.count?.toLocaleString() ?? '—'}</strong>
                        <span>INDEXED</span>
                    </div>
                </div>
            </section>

            <form
                className='catalog-toolbar'
                aria-label='Search Pokémon'
                onSubmit={event => event.preventDefault()}
            >
                <label className='catalog-search'>
                    <SearchOutlined aria-hidden='true' />
                    <input
                        ref={searchRef}
                        type='search'
                        placeholder='Search species, type, or ability...'
                        value={pokemon}
                        onChange={event => setPokemon(event.target.value)}
                        aria-label='Search Pokémon by name'
                    />
                    <kbd>/</kbd>
                </label>
                <button
                    className='catalog-search-submit'
                    type='submit'
                    onClick={() => searchRef.current?.focus()}
                >
                    Search Database
                </button>
            </form>

            <section className='type-matrix' aria-label='Filter by elemental type'>
                <div className='type-matrix__heading'>
                    <span className='section-kicker'>
                        ELEMENTAL CLASSIFICATION MATRIX
                    </span>
                    <span>
                        Showing active filters:{' '}
                        {selectedType === 'all'
                            ? 'All Units'
                            : selectedType.toUpperCase()}
                    </span>
                </div>
                <div className='type-options'>
                    <button
                        className={`type-option${selectedType === 'all' ? ' is-active' : ''}`}
                        type='button'
                        aria-pressed={selectedType === 'all'}
                        onClick={() => setSelectedType('all')}
                    >
                        <span className='type-option__dot type-option__dot--all' />
                        <span>All</span>
                    </button>
                    {POKEMON_TYPE_NAMES.map(type => (
                        <button
                            className={`type-option${selectedType === type ? ' is-active' : ''}`}
                            type='button'
                            aria-pressed={selectedType === type}
                            key={type}
                            onClick={() => setSelectedType(type)}
                        >
                            <span
                                className='type-option__dot'
                                style={{
                                    backgroundColor: POKEMON_TYPE_COLORS[type],
                                }}
                            />
                            <span>{type}</span>
                        </button>
                    ))}
                </div>
            </section>

            <section
                className='catalog-control-row'
                aria-label='Catalog display options'
            >
                <label className='catalog-sort'>
                    <span>Sort:</span>
                    <select
                        value={sortBy}
                        onChange={event =>
                            setSortBy(event.target.value as 'number' | 'name')
                        }
                    >
                        <option value='number'>National number</option>
                        <option value='name'>Name A-Z</option>
                    </select>
                </label>
                <span className='catalog-region'>REGION: KANTO</span>
                <span className='catalog-control-row__spacer' />
                <button
                    className={`favorites-filter${favoritesOnly ? ' is-active' : ''}`}
                    type='button'
                    aria-pressed={favoritesOnly}
                    onClick={() => setFavoritesOnly(current => !current)}
                >
                    {favoritesOnly ? <HeartFilled /> : <HeartOutlined />}
                    <span>Favorites</span>
                    <strong>{favorites.length}</strong>
                </button>
                <div className='view-mode' role='group' aria-label='Catalog layout'>
                    <button
                        className={viewMode === 'grid' ? 'is-active' : ''}
                        type='button'
                        aria-label='Grid view'
                        aria-pressed={viewMode === 'grid'}
                        onClick={() => setViewMode('grid')}
                    >
                        <AppstoreOutlined />
                    </button>
                    <button
                        className={viewMode === 'list' ? 'is-active' : ''}
                        type='button'
                        aria-label='List view'
                        aria-pressed={viewMode === 'list'}
                        onClick={() => setViewMode('list')}
                    >
                        <BarsOutlined />
                    </button>
                </div>
            </section>

            <div className='catalog-layout'>
                <section className='catalog-results' aria-label='Pokémon results'>
                    <div className='catalog-results__heading'>
                        <span className='section-kicker'>SPECIMEN RECORDS</span>
                        <span>{visiblePokemon?.length ?? 0} records</span>
                    </div>

                    {error ? (
                        <div className='catalog-state' role='alert'>
                            <strong>Unable to retrieve the field index.</strong>
                            <span>Check the connection and retry.</span>
                            <button type='button' onClick={() => refetch()}>
                                <ReloadOutlined /> Retry
                            </button>
                        </div>
                    ) : loading ? (
                        <div
                            className='pokemon-grid'
                            aria-busy='true'
                            aria-label='Loading Pokémon'
                        >
                            {Array.from({ length: 8 }, (_, index) => (
                                <div className='pokemon-skeleton' key={index} />
                            ))}
                        </div>
                    ) : visiblePokemon?.length ? (
                        <div
                            className={`pokemon-grid${viewMode === 'list' ? ' is-list' : ''}`}
                        >
                            {visiblePokemon.map((item: PokeList) => (
                                <PokeCard
                                    key={item.name}
                                    {...item}
                                    isFavorite={favorites.includes(item.name ?? '')}
                                    onToggleFavorite={toggleFavorite}
                                    onTypesLoaded={handleTypesLoaded}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className='catalog-state catalog-state--empty'>
                            <span className='empty-radar' aria-hidden='true'>
                                <span />
                            </span>
                            <strong>
                                {waitingForTypeData
                                    ? 'Classifying specimens'
                                    : 'Specimen unindexed'}
                            </strong>
                            <span>
                                {waitingForTypeData
                                    ? 'Type records are still syncing.'
                                    : 'No Pokémon match the active search and filters.'}
                            </span>
                            <button
                                type='button'
                                onClick={() => {
                                    setPokemon('')
                                    setSelectedType('all')
                                    setFavoritesOnly(false)
                                }}
                            >
                                Reset filters
                            </button>
                        </div>
                    )}
                </section>
            </div>
        </main>
    )
}

export default ListPokemon
