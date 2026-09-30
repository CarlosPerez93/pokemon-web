import { ArrowRightOutlined, RadarChartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import PokeCard from '@components/PokeCard'
import PokePresentation from '../../components/PokePresentation'

import api from '../../api'
import { useGet } from '../../hooks/api'
import { ResponseFetch } from '../../utils/api/api.util'
import { useFavorites } from '../../hooks/useFavorites'
import { POKEMON_TYPE_NAMES } from '../../utils/constants/pokemon.constants'

import './Home.css'

const PRIORITY_SPECIMENS = ['pikachu', 'bulbasaur', 'blastoise', 'gengar']

export const Home = () => {
    const { data } = useGet<ResponseFetch>({
        functionFetch: api.pokemon.pokemonList,
    })
    const { favorites, toggleFavorite } = useFavorites()

    return (
        <main className='home-page page-container'>
            <div className='home-breadcrumb'>
                FIELD OBSERVATION <span>/</span> RESEARCH ARCHIVE <span>/</span>{' '}
                KANTO SURVEY SECTOR
                <span className='home-live-status'>
                    <i /> TELEMETRY LOCK: ACTIVE · SPECIMEN QUEUE:{' '}
                    {data?.count?.toLocaleString() ?? '—'}
                </span>
            </div>

            <PokePresentation name='charizard' />

            <section className='priority-section' aria-labelledby='priority-title'>
                <div className='priority-heading'>
                    <div>
                        <span className='section-kicker'>EXPEDITION SPOTLIGHTS</span>
                        <h2 id='priority-title'>Priority Field Specimens</h2>
                    </div>
                    <div className='priority-heading__actions'>
                        <span>
                            Showing {PRIORITY_SPECIMENS.length} priority specimens
                        </span>
                        <Link to='/list-pokemon'>
                            Full Registry <ArrowRightOutlined />
                        </Link>
                    </div>
                </div>

                <div className='priority-grid'>
                    {PRIORITY_SPECIMENS.map(name => (
                        <PokeCard
                            key={name}
                            name={name}
                            isFavorite={favorites.includes(name)}
                            onToggleFavorite={toggleFavorite}
                        />
                    ))}
                </div>
            </section>

            <section
                className='expedition-banner'
                aria-label='Field expedition guide'
            >
                <div className='expedition-banner__icon'>
                    <RadarChartOutlined />
                </div>
                <div>
                    <span className='section-kicker'>
                        INTEGRATED ECOSYSTEM MODELER
                    </span>
                    <h2>Biological Field Expedition Guide 2025</h2>
                    <p>
                        Access high-resolution morphometrics, phylogenetic
                        transitions, and elemental interaction records.
                    </p>
                </div>
                <Link className='expedition-button' to='/dossier'>
                    Open Charizard dossier
                </Link>
                <Link
                    className='expedition-button expedition-button--primary'
                    to='/list-pokemon'
                >
                    Initialize habitat scan <ArrowRightOutlined />
                </Link>
            </section>

            <section className='home-telemetry' aria-label='Archive status'>
                <div>
                    <strong>{data?.count?.toLocaleString() ?? '—'}</strong>
                    <span>REGISTERED SPECIES</span>
                    <i>SYNC 99.8%</i>
                </div>
                <div>
                    <strong>{POKEMON_TYPE_NAMES.length}</strong>
                    <span>ELEMENTAL TYPES</span>
                    <i>ALL MAPPED</i>
                </div>
                <div>
                    <strong>ONLINE</strong>
                    <span>LOCAL SENSOR CACHE</span>
                    <i>SYNCHRONIZED</i>
                </div>
                <div>
                    <strong>{favorites.length}</strong>
                    <span>ARCHIVED FAVORITES</span>
                    <i>FIELD NOTES</i>
                </div>
            </section>
        </main>
    )
}

export default Home
