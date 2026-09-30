import { Link } from 'react-router-dom'

type PokemonCardArtworkProps = {
    name: string
    artwork?: string | null
}

export const PokemonCardArtwork = ({ name, artwork }: PokemonCardArtworkProps) => (
    <div className='pokemon-card__art'>
        {artwork ? (
            <Link to={`/dossier/${name}`} aria-label={`Open ${name} dossier`}>
                <img src={artwork} alt={name} loading='lazy' />
            </Link>
        ) : (
            <span aria-hidden='true'>?</span>
        )}
    </div>
)
