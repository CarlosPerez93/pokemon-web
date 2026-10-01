import './Badges.css'

export const Badges = ({ type }: { type: { name: string } }) => {
    return (
        <span
            className={`type-badge type-badge--${type.name} badge`}
            key={type.name}
        >
            <span aria-hidden='true' /> {type.name}
        </span>
    )
}

export default Badges
