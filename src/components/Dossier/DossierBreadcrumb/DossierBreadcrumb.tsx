import { Link } from 'react-router-dom'

import './DossierBreadcrumb.css'

export const DossierBreadcrumb = () => (
    <nav className='dossier-breadcrumb' aria-label='Breadcrumb'>
        <Link to='/'>Home</Link>
        <span>/</span>
        <Link to='/list-pokemon'>Pokédex</Link>
        <span>/</span>
        <strong>Dossier</strong>
        <span className='dossier-breadcrumb__sector'>
            FIELD OBSERVATION / RESEARCH ARCHIVE / KANTO SECTOR
        </span>
    </nav>
)

export default DossierBreadcrumb
