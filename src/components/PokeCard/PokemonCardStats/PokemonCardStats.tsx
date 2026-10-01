import { PokemonCardStatsProps } from './PokemonCardStats.type'

import './PokemonCardStats.css'

export const PokemonCardStats = ({ stats }: PokemonCardStatsProps) => (
    <div className='pokemon-card__stats' aria-label='Base stats'>
        {stats.slice(0, 3).map(({ base_stat, stat }) => (
            <div className='pokemon-card__stat' key={stat.name}>
                <span>{stat.name.replace('-', ' ')}</span>
                <span className='pokemon-card__stat-track'>
                    <span
                        style={{
                            width: `${Math.min(100, (base_stat / 255) * 100)}%`,
                        }}
                    />
                </span>
                <strong>{base_stat}</strong>
            </div>
        ))}
    </div>
)
