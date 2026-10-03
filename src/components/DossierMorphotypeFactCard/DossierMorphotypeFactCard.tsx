import { DossierMorphotypeFactCardProps } from './DossierMorphotypeFactCard.type'

import './DossierMorphotypeFactCard.css'

export const DossierMorphotypeFactCard = ({
    label,
    value,
    detail,
}: DossierMorphotypeFactCardProps) => (
    <div className='dossier-morphotype-fact-card'>
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{detail}</small>
    </div>
)

export default DossierMorphotypeFactCard
