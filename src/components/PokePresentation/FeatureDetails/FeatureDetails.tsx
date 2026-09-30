import { ArrowRightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { ResponsePoke } from '../../../utils/api/pokemon-record.types'

import './FeatureDetails.css'
import './FeatureDetailsFacts.css'
type FeatureDetailsProps = {
    pokemon: ResponsePoke
    genus?: string
    fieldNote?: string
}

export const FeatureDetails = ({
    pokemon,
    genus,
    fieldNote,
}: FeatureDetailsProps) => (
    <div className='feature-slide__copy'>
        <div className='specimen-index'>
            <span>SPECIMEN INDEX</span>
            <strong>#{String(pokemon.id).padStart(4, '0')}</strong>
        </div>
        <h1>{pokemon.name}</h1>
        <p className='feature-slide__description'>
            {genus ?? 'Kanto field specimen'} · Kanto sector
        </p>
        <div className='type-badges' aria-label='Pokémon types'>
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
        <dl className='feature-facts'>
            <div>
                <dt>Height</dt>
                <dd>{(pokemon.height / 10).toFixed(1)} m</dd>
            </div>
            <div>
                <dt>Weight</dt>
                <dd>{(pokemon.weight / 10).toFixed(1)} kg</dd>
            </div>
            <div>
                <dt>Base XP</dt>
                <dd>{pokemon.base_experience ?? '—'}</dd>
            </div>
        </dl>
        <p className='feature-slide__note'>
            {fieldNote ?? 'A high-priority specimen in the Kanto research archive.'}
        </p>
        <Link className='feature-link' to={`/dossier/${pokemon.name}`}>
            View full dossier <ArrowRightOutlined />
        </Link>
    </div>
)
