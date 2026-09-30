import PokePresentation from '../../components/PokePresentation'
import api from '../../api'
import { useGet } from '../../hooks/api'
import { useFavorites } from '../../hooks/useFavorites'
import { ResponseFetch } from '../../utils/api/pokemon-list.types'
import { POKEMON_TYPE_NAMES } from '../../utils/constants/pokemon-type.constants'
import { ArchiveTelemetry } from './ArchiveTelemetry'
import { ExpeditionBanner } from './ExpeditionBanner'
import { HomeBreadcrumb } from './HomeBreadcrumb'
import { PrioritySpecimens } from './PrioritySpecimens'
import './Home.css'

export const HomeView = () => {
    const { data } = useGet<ResponseFetch>({ functionFetch: api.pokemon.pokemonList })
    const { favorites, toggleFavorite } = useFavorites()

    return (
        <main className='home-page page-container'>
            <HomeBreadcrumb queueSize={data?.count} />
            <PokePresentation name='charizard' />
            <PrioritySpecimens favorites={favorites} onToggleFavorite={toggleFavorite} />
            <ExpeditionBanner />
            <ArchiveTelemetry speciesCount={data?.count} favoriteCount={favorites.length} typeCount={POKEMON_TYPE_NAMES.length} />
        </main>
    )
}

export default HomeView
