import { Link } from 'react-router-dom'

import './FeatureArtwork.css'
import './FeatureArtworkOrbits.css'
import './FeatureArtworkResponsive.css'

type FeatureArtworkProps = {
    name: string
    artwork?: string | null
}

export const FeatureArtwork = ({ name, artwork }: FeatureArtworkProps) => (
    <div className='feature-slide__art' aria-label={`${name} official artwork`}>
        <span className='art-orbit art-orbit--outer' />
        <span className='art-orbit art-orbit--inner' />
        {artwork && <img src={artwork} alt={name} />}
        <Link className='feature-slide__art-link' to='/list-pokemon'>
            Explore Pokédex
        </Link>
    </div>
)
