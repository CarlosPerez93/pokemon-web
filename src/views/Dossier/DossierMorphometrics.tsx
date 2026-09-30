import { ResponsePoke } from '../../utils/api/pokemon-record.types'

type DossierMorphometricsProps = {
    pokemon: ResponsePoke
}

export const DossierMorphometrics = ({ pokemon }: DossierMorphometricsProps) => (
    <div className='dossier-morphometrics'>
        <Metric label='HEIGHT' value={(pokemon.height / 10).toFixed(1)} unit='m' />
        <Metric label='WEIGHT' value={(pokemon.weight / 10).toFixed(1)} unit='kg' />
        <Metric
            label='BASE STAT'
            value={pokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0)}
        />
    </div>
)

const Metric = ({
    label,
    value,
    unit,
}: {
    label: string
    value: string | number
    unit?: string
}) => (
    <div>
        <span>{label}</span>
        <strong>
            {value} {unit && <small>{unit}</small>}
        </strong>
    </div>
)
