import { PokemonStatSlot } from '../../utils/api/pokemon-record.types'

type CombatStatListProps = {
    stats: PokemonStatSlot[]
}

export const CombatStatList = ({ stats }: CombatStatListProps) => (
    <div className='dossier-stat-list' aria-label='Combat stats'>
        {stats.map(({ base_stat, stat }) => (
            <div className='dossier-stat' key={stat.name}>
                <span>{stat.name.replace('-', ' ')}</span>
                <span className='dossier-stat__track'>
                    <span
                        style={{
                            width: `${Math.min(100, (base_stat / 150) * 100)}%`,
                        }}
                    />
                </span>
                <strong>{base_stat}</strong>
            </div>
        ))}
    </div>
)
