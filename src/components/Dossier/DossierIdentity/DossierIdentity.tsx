import { DossierIdentityProps } from './DossierIdentity.type'

import './DossierIdentity.css'

export const DossierIdentity = ({ pokemon }: DossierIdentityProps) => {
    return (
        <div className='dossier-copy'>
            <div className='section-kicker'>SPECIMEN FILE · NATIONAL INDEX</div>
            <div className='dossier-number'>
                #{String(pokemon.id).padStart(4, '0')}
            </div>
            <h1>{pokemon.name}</h1>
        </div>
    )
}

export default DossierIdentity
