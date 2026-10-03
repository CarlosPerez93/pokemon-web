import { DossierRecordProps } from '../../utils/types/dossier.types'

export type DossierMorphotypeFactsProps = Pick<
    DossierRecordProps,
    'pokemon' | 'species' | 'speciesLoading'
>
