import { EvolutionStage } from '../../../hooks/useEvolutionChain'

export type DossierEvolutionChainProps = {
    stages: EvolutionStage[]
    loading: boolean
    currentId: number
}
