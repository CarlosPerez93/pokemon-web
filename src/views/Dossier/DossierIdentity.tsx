import { ArrowRightOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import { DossierRecordProps } from './dossier.types'

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
            <p className='dossier-species'>{genus ?? 'Field specimen'} · Kanto</p>
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
            <DossierMorphometrics {...{ pokemon }} />
            <p className='dossier-note'>
                {note ?? 'Registered biological field specimen.'}
                {habitat && ` Habitat: ${habitat}.`}
            </p>
            <DossierActions {...{ pokemon, isFavorite, onToggleFavorite }} />
        </div>
    )
}

const DossierMorphometrics = ({ pokemon }: Pick<DossierRecordProps, 'pokemon'>) => (
    <div className='dossier-morphometrics'>
        <div>
            <span>HEIGHT</span>
            <strong>
                {(pokemon.height / 10).toFixed(1)} <small>m</small>
            </strong>
        </div>
        <div>
            <span>WEIGHT</span>
            <strong>
                {(pokemon.weight / 10).toFixed(1)} <small>kg</small>
            </strong>
        </div>
        <div>
            <span>BASE STAT</span>
            <strong>
                {pokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0)}
            </strong>
        </div>
    </div>
)

const DossierActions = ({
    pokemon,
    isFavorite,
    onToggleFavorite,
}: DossierRecordProps) => (
    <div className='dossier-actions'>
        <Link className='dossier-primary-action' to='/list-pokemon'>
            Explore Pokédex <ArrowRightOutlined />
        </Link>
        <button
            className={`dossier-favorite${isFavorite ? ' is-active' : ''}`}
            type='button'
            aria-pressed={isFavorite}
            onClick={() => onToggleFavorite(pokemon.name)}
        >
            {isFavorite ? <HeartFilled /> : <HeartOutlined />}
            {isFavorite ? 'Saved to archive' : 'Save specimen'}
        </button>
    </div>
)
