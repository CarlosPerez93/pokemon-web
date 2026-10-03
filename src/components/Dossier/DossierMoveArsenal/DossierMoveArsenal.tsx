import { useState } from 'react'

import { DossierMoveArsenalProps } from './DossierMoveArsenal.type'

import './DossierMoveArsenal.css'
import { ButtonApp } from '@components/ButtonApp/ButtonApp'

const PREVIEW_COUNT = 24

export const DossierMoveArsenal = ({ pokemon }: DossierMoveArsenalProps) => {
    const [expanded, setExpanded] = useState(false)
    const moves = pokemon.moves
    const visibleMoves = expanded ? moves : moves.slice(0, PREVIEW_COUNT)
    const remaining = moves.length - visibleMoves.length

    return (
        <section className='dossier-move-arsenal' aria-label='Move arsenal'>
            <div className='section-kicker'>
                MOVE ARSENAL · {moves.length} RECORDED
            </div>
            <div className='dossier-move-arsenal__grid'>
                {visibleMoves.map(({ move }) => (
                    <span className='dossier-move-pill' key={move.name}>
                        {move.name.replace(/-/g, ' ')}
                    </span>
                ))}
            </div>
            {remaining > 0 && (
                <ButtonApp
                    className='dossier-move-arsenal__toggle'
                    onClick={() => setExpanded(true)}
                >
                    Show {remaining} more moves
                </ButtonApp>
            )}
        </section>
    )
}

export default DossierMoveArsenal
