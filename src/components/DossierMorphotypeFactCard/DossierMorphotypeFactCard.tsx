import { Skeleton } from 'antd'

import { DossierMorphotypeFactCardProps } from './DossierMorphotypeFactCard.type'

import './DossierMorphotypeFactCard.css'

export const DossierMorphotypeFactCard = ({
    label,
    value,
    detail,
    loading,
}: DossierMorphotypeFactCardProps) => (
    <div className='dossier-morphotype-fact-card' aria-busy={loading || undefined}>
        <span>{label}</span>
        <strong>
            {loading ? (
                <Skeleton.Input
                    active
                    size='small'
                    style={{ width: 90, minWidth: 90 }}
                />
            ) : (
                value
            )}
        </strong>
        <small>{detail}</small>
    </div>
)

export default DossierMorphotypeFactCard
