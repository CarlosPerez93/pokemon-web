import { Link } from 'react-router-dom'

import {
    PokemonTypeSlot,
    PokemonStatSlot,
} from '../../../utils/api/pokemon-record.types'
import { PokemonCardStats } from '../PokemonCardStats'

import './PokemonCardDetails.css'

type PokemonCardDetailsProps = {
    name: string
    types: PokemonTypeSlot[]
    stats: PokemonStatSlot[]
}

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
                <span
                    className={`type-badge type-badge--${type.name}`}
                    key={type.name}
                >
                    <span aria-hidden='true' />
                    {type.name}
                </span>
            ))}
        </div>
        <PokemonCardStats stats={stats} />
    </div>
)
