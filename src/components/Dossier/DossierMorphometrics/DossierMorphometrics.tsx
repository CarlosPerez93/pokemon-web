import { MetricCell } from '../../../components/MetricCell'
import { DossierMorphometricsProps } from './DossierMorphometrics.type'

import './DossierMorphometrics.css'

export const DossierMorphometrics = ({ pokemon }: DossierMorphometricsProps) => (
    <div className='dossier-morphometrics'>
        <MetricCell
            label='HEIGHT'
            value={(pokemon.height / 10).toFixed(1)}
            unit='m'
        />
        <MetricCell
            label='WEIGHT'
            value={(pokemon.weight / 10).toFixed(1)}
            unit='kg'
        />
        <MetricCell
            label='BASE STAT'
            value={pokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0)}
        />
    </div>
)
