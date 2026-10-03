import { Link } from 'react-router-dom'
import { Skeleton } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'

import { DossierEvolutionChainProps } from './DossierEvolutionChain.type'

import './DossierEvolutionChain.css'

const artworkUrl = (id: number) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

export const DossierEvolutionChain = ({
    stages,
    loading,
    currentId,
}: DossierEvolutionChainProps) => {
    if (loading) {
        return (
            <section
                className='dossier-evolution-chain'
                aria-label='Evolutionary line'
                aria-busy='true'
            >
                <div className='section-kicker'>EVOLUTIONARY TREE</div>
                <div className='dossier-evolution-chain__grid'>
                    {Array.from({ length: 3 }, (_, index) => (
                        <Skeleton.Image
                            active
                            key={index}
                            style={{ width: 128, height: 128 }}
                        />
                    ))}
                </div>
            </section>
        )
    }
    if (stages.length < 2) return null

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

export default DossierEvolutionChain
