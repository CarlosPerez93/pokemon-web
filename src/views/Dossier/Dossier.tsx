import { useParams } from 'react-router-dom'

import { useFavorites } from '../../hooks/useFavorites'
import { DossierErrorState } from '@components/Dossier/DossierErrorState'
import { DossierLoadingState } from '@components/Dossier/DossierLoadingState'
import { DossierPage } from './DossierPage/DossierPage'
import { useDossierRecord } from '../../hooks/useDossierRecord'

import './Dossier.css'

export const Dossier = () => {
    const { pokemonName = 'charizard' } = useParams()
    const record = useDossierRecord(pokemonName)
    const { favorites, toggleFavorite } = useFavorites()

    if (record.loading || (!record.pokemon?.id && !record.error)) {
        return (
            <div className='dossier-route'>
                <DossierLoadingState />
            </div>
        )
    }
    if (record.error || !record.pokemon?.id) {
        return (
            <div className='dossier-route'>
                <DossierErrorState onRetry={() => record.refetch()} />
            </div>
        )
    }

    return (
        <div className='dossier-route'>
            <DossierPage
                pokemon={record.pokemon}
                species={record.species}
                isFavorite={favorites.includes(record.pokemon.name)}
                onToggleFavorite={toggleFavorite}
            />
        </div>
    )
}

export default Dossier
