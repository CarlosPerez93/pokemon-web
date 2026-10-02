import { useEffect } from 'react'
import { HeartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import PokePresentation from '@components/PokePresentation'
import api from '../../api'
import { useGet } from '@hooks/api'
import { useFavorites } from '@hooks/useFavorites'
import { ResponseFetch } from '@utils/api/pokemon-list.types'
import { POKEMON_TYPE_NAMES } from '@utils/constants/pokemon-type.constants'
import { ArchiveTelemetry } from '@components/ArchiveTelemetry'
import { ExpeditionBanner } from '@components/ExpeditionBanner'
import { HomeBreadcrumb } from '@components/HomeBreadcrumb'
import { PrioritySpecimens } from '@components/PrioritySpecimens'
import { setTotalSpecies } from '@services/SpeciesIndex/speciesIndex.slice'

import './Home.css'

export const Home = () => {
    const dispatch = useDispatch()
    const speciesCount = useSelector(
        (state: { speciesIndex: { totalSpecies: number | null } }) =>
            state.speciesIndex.totalSpecies,
    )
    console.log(speciesCount)
    const { data } = useGet<ResponseFetch>({
        functionFetch: api.pokemon.pokemonList,
    })
    const { favorites, toggleFavorite } = useFavorites()

    useEffect(() => {
        if (data?.count !== undefined) dispatch(setTotalSpecies(data.count))
    }, [data?.count, dispatch])

    return (
        <main className='home-page page-container'>
            <HomeBreadcrumb speciesCount={speciesCount ?? undefined} />
            <div className='home-favorites-access'>
                <Link to='/favorites'>
                    <HeartOutlined /> Saved favorites
                    <strong>{favorites.length}</strong>
                </Link>
            </div>
            <PokePresentation name='charizard' />
            <PrioritySpecimens
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
            />
            <ExpeditionBanner />
            <ArchiveTelemetry
                speciesCount={speciesCount ?? undefined}
                favoriteCount={favorites.length}
                typeCount={POKEMON_TYPE_NAMES.length}
            />
        </main>
    )
}

export default Home
