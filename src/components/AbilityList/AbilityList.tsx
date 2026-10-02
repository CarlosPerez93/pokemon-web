import { AbilityListProps } from './AbilityList.type'

import './AbilityList.css'

export const AbilityList = ({ abilities }: AbilityListProps) => (
    <div className='dossier-abilities'>
        <span className='section-kicker'>INTRINSIC ABILITIES</span>
        {abilities.map(({ ability, is_hidden }) => (
            <span key={ability.name}>
                {ability.name.replace('-', ' ')}
                {is_hidden ? ' · hidden' : ''}
            </span>
        ))}
    </div>
)

export default AbilityList
