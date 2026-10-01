import { DossierMorphotypeProps } from './DossierMorphotype.type'

import './DossierMorphotype.css'

export const DossierMorphotype = ({ pokemon, species }: DossierMorphotypeProps) => {
    const genus =
        species?.genera?.find(({ language }) => language.name === 'en')?.genus ??
        'Flame Pokémon'

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
        </aside>
    )
}

export default DossierMorphotype
