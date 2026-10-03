import type { BadgesProps } from './Badges.type'

import './Badges.css'

export const Badges = ({ type, className }: BadgesProps) => {
    const widthProp = `type-badge type-badge--${type.name} badge ${className ?? ''}`

    return (
        <span className={widthProp} key={type.name}>
            <span aria-hidden='true' /> {type.name}
        </span>
    )
}

export default Badges
