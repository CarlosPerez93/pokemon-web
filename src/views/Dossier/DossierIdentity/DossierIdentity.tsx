import { DossierRecordProps } from '../../../utils/types/dossier.types'
import { DossierActions } from '../DossierActions'
import { DossierMorphometrics } from '../DossierMorphometrics'

import './DossierIdentity.css'

export const DossierIdentity = ({
    pokemon,
    species,
    isFavorite,
    onToggleFavorite,
}: DossierRecordProps) => {
    const genus = species?.genera?.find(
        ({ language }) => language.name === 'en',
    )?.genus
    const note = species?.flavor_text_entries
        ?.find(({ language }) => language.name === 'en')
        ?.flavor_text.replace(/[\n\f]/g, ' ')
    const habitat = species?.habitat?.name.replace('-', ' ')

    return (
        <div className='dossier-copy'>
            <div className='section-kicker'>SPECIMEN FILE · NATIONAL INDEX</div>
            <div className='dossier-number'>
                #{String(pokemon.id).padStart(4, '0')}
            </div>
            <h1>{pokemon.name}</h1>
            <p className='dossier-species'>{genus ?? 'Field specimen'}</p>
            <div className='type-badges' aria-label={`${pokemon.name} types`}>
                {pokemon.types.map(({ type }) => (
                    <span
                        className={`type-badge type-badge--${type.name}`}
                        key={type.name}
                    >
                        <span aria-hidden='true' />
                        {type.name}
                    </span>
                ))}
            </div>
            <DossierMorphometrics pokemon={pokemon} />
            <p className='dossier-note'>
                {note ?? 'Registered biological field specimen.'}
                {habitat && ` Habitat: ${habitat}.`}
            </p>
            <DossierActions
                name={pokemon.name}
                isFavorite={isFavorite}
                onToggleFavorite={onToggleFavorite}
            />
        </div>
    )
}
