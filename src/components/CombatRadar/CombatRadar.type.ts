import { PokemonStatSlot } from '@utils/api/pokemon-record.types'

export type CombatRadarProps = {
    stats: PokemonStatSlot[]
    size?: 'default' | 'expanded'
}
