import './Badges.css'

type BadgesProps = {
    type: { name: string }
    className?: boolean
}

export const Badges = ({ type, className = false }: BadgesProps) => {
    const widthProp = className
        ? `type-badge type-badge--${type.name} badge-small `
        : `type-badge type-badge--${type.name} badge-large `

    return (
        <span className={widthProp} key={type.name}>
            <span aria-hidden='true' /> {type.name}
        </span>
    )
}

export default Badges
