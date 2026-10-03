import { useCallback, useEffect } from 'react'
import { HeartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { HomeBreadcrumb } from '@components/HomeBreadcrumb'
import PokePresentation from '@components/PokePresentation'
import { ArchiveTelemetry } from '@components/ArchiveTelemetry'
import { ExpeditionBanner } from '@components/ExpeditionBanner'
import { PrioritySpecimens } from '@components/PrioritySpecimens'

import api from '../../api'
import { useGet } from '@hooks/api'
import { useFavorites } from '@hooks/useFavorites'
import { ResponseFetch } from '@utils/api/pokemon-list.types'
import { setTotalSpecies } from '@services/SpeciesIndex/speciesIndex.slice'
import { PRIORITY_SPECIMENS } from '@utils/constants/PrioritySpecimens.constants'

import './Home.css'

export const Home = () => {
    const dispatch = useDispatch()
    const speciesCount = useSelector(
        (state: { speciesIndex: { totalSpecies: number | null } }) =>
            state.speciesIndex.totalSpecies,
    )
    const fetchSpecies = useCallback(() => api.pokemon.pokemonList(), [])
    const speciesRequest = useGet<ResponseFetch>({
        functionFetch: fetchSpecies,
    })
    const { data } = speciesRequest
    const typeRequest = useGet<ResponseFetch>(
        { functionFetch: api.pokemon.typeList },
        { cancelError: true },
    )
    const { favorites, toggleFavorite } = useFavorites()

    useEffect(() => {
        if (data?.count !== undefined) dispatch(setTotalSpecies(data.count))
    }, [data?.count, dispatch])

    const apiStatus = (() => {
        const hasSpeciesCount = data?.count !== undefined
        const hasTypeCount = typeRequest.data?.count !== undefined

        if (hasSpeciesCount && hasTypeCount) return 'ONLINE' as const
        if (speciesRequest.error && typeRequest.error) return 'OFFLINE' as const
        if (speciesRequest.error || typeRequest.error) return 'PARTIAL' as const
        return 'SYNCING' as const
    })()

    return (
        <main className='home-page page-container'>
            <HomeBreadcrumb
                speciesCount={speciesCount ?? undefined}
                loading={speciesRequest.loading && speciesCount === null}
            />
            <div className='home-favorites-access'>
                <Link to='/favorites'>
                    <HeartOutlined /> Saved favorites
                    <strong>{favorites.length}</strong>
                </Link>
            </div>
            <PokePresentation names={['charizard', ...PRIORITY_SPECIMENS]} />
            <PrioritySpecimens
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
            />
            <ExpeditionBanner />
            <ArchiveTelemetry
                speciesCount={speciesCount ?? undefined}
                favoriteCount={favorites.length}
                typeCount={typeRequest.data?.count}
                apiStatus={apiStatus}
            />
        </main>
    )
}

export default Home
