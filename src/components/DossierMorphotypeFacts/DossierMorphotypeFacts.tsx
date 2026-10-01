import { formatGenderRate } from '@utils/functions/formatGenderRate'
import { DossierMorphotypeProps } from '../Dossier/DossierMorphotype/DossierMorphotype.type'

import './DossierMorphotypeFacts.css'
export const DossierMorphotypeFacts = ({
    pokemon,
    species,
}: DossierMorphotypeProps) => {
    const habitat = species?.habitat?.name.replace('-', ' ') ?? 'Volcanic Crags'

    return (
        <div className='dossier-morphotype__facts'>
            <div>
                <span>HEIGHT (ALTITUDE)</span>
                <strong>{(pokemon.height / 10).toFixed(1)} m</strong>
                <small>
                    Imperial: {((pokemon.height / 10) * 3.28084).toFixed(1)}'
                </small>
            </div>
            <div>
                <span>BODY MASS</span>
                <strong>{(pokemon.weight / 10).toFixed(1)} kg</strong>
                <small>
                    Imperial: {((pokemon.weight / 10) * 2.20462).toFixed(1)} lbs
                </small>
            </div>
            <div>
                <span>GENDER RATIO</span>
                <strong>{formatGenderRate(species?.gender_rate)}</strong>
                <small>Field population estimate</small>
            </div>
            <div>
                <span>NATURAL BIOME</span>
                <strong>{habitat}</strong>
                <small>Montane thermal shifts</small>
            </div>
        </div>
    )
}

export default DossierMorphotypeFacts
