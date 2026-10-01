import { TypeOptionProps } from './TypeOption.type'

import './TypeOption.css'

export const TypeOption = ({
    name,
    value,
    color,
    active,
    onSelect,
}: TypeOptionProps) => (
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
