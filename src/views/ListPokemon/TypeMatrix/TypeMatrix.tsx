import {
    POKEMON_TYPE_COLORS,
    POKEMON_TYPE_NAMES,
} from '../../../utils/constants/pokemon-type.constants'
import { TypeOption } from '../TypeOption'

import './TypeMatrix.css'

type TypeMatrixProps = {
    selected: string
    onSelect: (type: string) => void
}

export const TypeMatrix = ({ selected, onSelect }: TypeMatrixProps) => (
    <section className='type-matrix' aria-label='Filter by elemental type'>
        <div className='type-matrix__heading'>
            <span className='section-kicker'>ELEMENTAL CLASSIFICATION MATRIX</span>
            <span>
                Showing active filters:{' '}
                {selected === 'all' ? 'All Units' : selected.toUpperCase()}
            </span>
        </div>
        <div className='type-options'>
            <TypeOption
                name='All'
                value='all'
                active={selected === 'all'}
                onSelect={onSelect}
            />
            {POKEMON_TYPE_NAMES.map(type => (
                <TypeOption
                    key={type}
                    name={type}
                    value={type}
                    color={POKEMON_TYPE_COLORS[type]}
                    active={selected === type}
                    onSelect={onSelect}
                />
            ))}
        </div>
    </section>
)
