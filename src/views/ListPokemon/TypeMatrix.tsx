import {
    POKEMON_TYPE_COLORS,
    POKEMON_TYPE_NAMES,
} from '../../utils/constants/pokemon-type.constants'

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

const TypeOption = ({
    name,
    value,
    color,
    active,
    onSelect,
}: {
    name: string
    value: string
    color?: string
    active: boolean
    onSelect: (value: string) => void
}) => (
    <button
        className={`type-option${active ? ' is-active' : ''}`}
        type='button'
        aria-pressed={active}
        onClick={() => onSelect(value)}
    >
        <span
            className={`type-option__dot${value === 'all' ? ' type-option__dot--all' : ''}`}
            style={color ? { backgroundColor: color } : undefined}
        />
        <span>{name}</span>
    </button>
)
