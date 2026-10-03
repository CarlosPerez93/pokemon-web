import { DossierArtworkProps } from './DossierArtwork.type'

import './DossierArtwork.css'

export const DossierArtwork = ({ pokemon }: DossierArtworkProps) => {
    const artwork =
        pokemon.sprites.other?.['official-artwork']?.front_default ??
        pokemon.sprites.other?.dream_world?.front_default ??
        pokemon.sprites.front_default

    return (
        <div
            className='dossier-artwork'
            aria-label={`${pokemon.name} official artwork`}
        >
            <span className='dossier-artwork__halo' />
            <span className='dossier-artwork__index'>
                REG-{String(pokemon.id).padStart(4, '0')}
            </span>
            {artwork && <img src={artwork} alt={pokemon.name} />}
            <div className='dossier-artwork__caption'>
                OFFICIAL BIOLOGICAL ARTWORK <span>GEN-I STANDARD</span>
            </div>
        </div>
    )
}

export default DossierArtwork
