import { formatGenderRate } from '@utils/functions/formatGenderRate'

import { DossierMorphotypeProps } from './DossierMorphotype.type'

import './DossierMorphotype.css'

export const DossierMorphotype = ({ pokemon, species }: DossierMorphotypeProps) => {
    const genus =
        species?.genera?.find(({ language }) => language.name === 'en')?.genus ??
        'Flame Pokémon'
    const habitat = species?.habitat?.name.replace('-', ' ') ?? 'Volcanic Crags'

    return (
        <aside className='dossier-morphotype' aria-label='Species morphotype'>
            <div className='dossier-morphotype__heading'>
                <div>
                    <span className='section-kicker'>SPECIES MORPHOTYPE</span>
                    <h2>{pokemon.name}</h2>
                    <span className='dossier-morphotype__genus'>{genus}</span>
                </div>
                <span className='dossier-conservation'>CONSERVATION: STABLE</span>
            </div>
            <div className='type-badges' aria-label={`${pokemon.name} types`}>
                {pokemon.types.map(({ type }) => (
                    <span
                        className={`type-badge type-badge--${type.name}`}
                        key={type.name}
                    >
                        <span aria-hidden='true' /> {type.name}
                    </span>
                ))}
            </div>
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
            <div className='dossier-morphotype__traits'>
                <span className='section-kicker'>INTRINSIC BIOLOGICAL TRAITS</span>
                {pokemon.abilities.map(({ ability, is_hidden }) => (
                    <div key={ability.name}>
                        <strong>{ability.name.replace('-', ' ')}</strong>
                        <span>
                            {is_hidden ? 'Hidden gene' : 'Standard innate'} ·
                            Catalyzes internal fire enzyme production.
                        </span>
                    </div>
                ))}
            </div>
        </aside>
    )
}
