import { useParams } from 'react-router-dom'

import { useFavorites } from '../../hooks/useFavorites'
import { DossierErrorState } from './DossierErrorState'
import { DossierLoadingState } from './DossierLoadingState'
import { DossierPage } from './DossierPage'
import { useDossierRecord } from './useDossierRecord'

import './Dossier.css'

export const Dossier = () => {
    const { pokemonName = 'charizard' } = useParams()
    const record = useDossierRecord(pokemonName)
    const { favorites, toggleFavorite } = useFavorites()

    if (record.loading || (!record.pokemon?.id && !record.error)) {
        return <DossierLoadingState />
    }
    if (record.error || !record.pokemon?.id) {
        return <DossierErrorState onRetry={() => record.refetch()} />
    }

    return (
        <DossierPage
            pokemon={record.pokemon}
            species={record.species}
            isFavorite={favorites.includes(record.pokemon.name)}
            onToggleFavorite={toggleFavorite}
        />
    )
}

export default Dossier
