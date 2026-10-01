import { Link } from 'react-router-dom'
import { ArrowRightOutlined } from '@ant-design/icons'

import { EvolutionStage } from '../../../hooks/useEvolutionChain'

import './DossierEvolutionChain.css'

type DossierEvolutionChainProps = {
    stages: EvolutionStage[]
    loading: boolean
    currentId: number
}

const artworkUrl = (id: number) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

export const DossierEvolutionChain = ({
    stages,
    loading,
    currentId,
}: DossierEvolutionChainProps) => {
    if (loading || stages.length < 2) return null

    return (
        <section className='dossier-evolution-chain' aria-label='Evolutionary line'>
            <div className='section-kicker'>EVOLUTIONARY TREE</div>
            <div className='dossier-evolution-chain__grid'>
                {stages.map((stage, index) => (
                    <div className='dossier-evolution-chain__node' key={stage.id}>
                        {index > 0 && (
                            <ArrowRightOutlined
                                className='dossier-evolution-chain__arrow'
                                aria-hidden='true'
                            />
                        )}
                        <Link
                            to={`/dossier/${stage.id}`}
                            className={`dossier-evolution-chain__card${
                                stage.id === currentId ? ' is-current' : ''
                            }`}
                        >
                            <img src={artworkUrl(stage.id)} alt={stage.name} />
                            <span>#{String(stage.id).padStart(4, '0')}</span>
                            <strong>{stage.name.replace(/-/g, ' ')}</strong>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}
