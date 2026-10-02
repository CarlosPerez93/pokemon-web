import { Link } from 'react-router-dom'

import Badges from '@components/Badges'
import { PokemonCardStats } from '../PokemonCardStats'

import { PokemonCardDetailsProps } from './PokemonCardDetails.type'

import './PokemonCardDetails.css'

export const PokemonCardDetails = ({
    name,
    types,
    stats,
}: PokemonCardDetailsProps) => (
    <div className='pokemon-card__details'>
        <h2>
            <Link to={`/dossier/${name}`}>{name}</Link>
        </h2>
        <div className='type-badges' aria-label={`${name} types`}>
            {types.map(({ type }) => (
                <Badges type={type} className='type-badge' />
            ))}
        </div>
        <PokemonCardStats stats={stats} />
    </div>
)
