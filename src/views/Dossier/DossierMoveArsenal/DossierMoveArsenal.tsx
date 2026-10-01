import { useState } from 'react'

import { ResponsePoke } from '../../../utils/api/pokemon-record.types'

import './DossierMoveArsenal.css'

type DossierMoveArsenalProps = {
    pokemon: ResponsePoke
}

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
                <button
                    className='dossier-move-arsenal__toggle'
                    type='button'
                    onClick={() => setExpanded(true)}
                >
                    Show {remaining} more moves
                </button>
            )}
        </section>
    )
}
