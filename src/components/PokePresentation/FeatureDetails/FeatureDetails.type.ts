import { ResponsePoke } from '../../../utils/api/pokemon-record.types'

export type FeatureDetailsProps = {
    pokemon: ResponsePoke
    genus?: string
    fieldNote?: string
}
