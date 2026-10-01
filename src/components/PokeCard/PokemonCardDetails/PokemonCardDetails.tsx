import { Link } from 'react-router-dom'

import { PokemonCardDetailsProps } from './PokemonCardDetails.type'
import { PokemonCardStats } from '../PokemonCardStats'

import './PokemonCardDetails.css'
import Badges from '@components/Badges'

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
                <Badges type={type} className />
            ))}
        </div>
        <PokemonCardStats stats={stats} />
    </div>
)
