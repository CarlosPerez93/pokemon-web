import { formatGenderRate } from '@utils/functions/formatGenderRate'
import { DossierMorphotypeFactCard } from '@components/DossierMorphotypeFactCard'
import { DossierMorphotypeFactsProps } from './DossierMorphotypeFacts.type'

import './DossierMorphotypeFacts.css'
export const DossierMorphotypeFacts = ({
    pokemon,
    species,
}: DossierMorphotypeFactsProps) => {
    const habitat = species?.habitat?.name.replace('-', ' ') ?? 'Volcanic Crags'
    const facts = [
        {
            label: 'HEIGHT (ALTITUDE)',
            value: `${(pokemon.height / 10).toFixed(1)} m`,
            detail: `Imperial: ${((pokemon.height / 10) * 3.28084).toFixed(1)}'`,
        },
        {
            label: 'BODY MASS',
            value: `${(pokemon.weight / 10).toFixed(1)} kg`,
            detail: `Imperial: ${((pokemon.weight / 10) * 2.20462).toFixed(1)} lbs`,
        },
        {
            label: 'GENDER RATIO',
            value: formatGenderRate(species?.gender_rate),
            detail: 'Field population estimate',
        },
        {
            label: 'NATURAL BIOME',
            value: habitat,
            detail: 'Montane thermal shifts',
        },
    ]

    return (
        <div className='dossier-morphotype__facts'>
            {facts.map(fact => (
                <DossierMorphotypeFactCard key={fact.label} {...fact} />
            ))}
        </div>
    )
}

export default DossierMorphotypeFacts
