import { ArrowRightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import PokeCard from '@components/PokeCard'
import { PrioritySpecimensProps } from './PrioritySpecimens.type'

import './PrioritySpecimens.css'

const PRIORITY_SPECIMENS = ['pikachu', 'bulbasaur', 'blastoise', 'gengar']

export const PrioritySpecimens = ({
    favorites,
    onToggleFavorite,
}: PrioritySpecimensProps) => (
    <section className='priority-section' aria-labelledby='priority-title'>
        <div className='priority-heading'>
            <div>
                <span className='section-kicker'>EXPEDITION SPOTLIGHTS</span>
                <h2 id='priority-title'>Priority Field Specimens</h2>
            </div>
            <div className='priority-heading__actions'>
                <span>Showing {PRIORITY_SPECIMENS.length} priority specimens</span>
                <Link to='/list-pokemon'>
                    Full Registry <ArrowRightOutlined />
                </Link>
            </div>
        </div>
        <div className='priority-grid'>
            {PRIORITY_SPECIMENS.map(name => (
                <PokeCard
                    key={name}
                    name={name}
                    isFavorite={favorites.includes(name)}
                    onToggleFavorite={onToggleFavorite}
                />
            ))}
        </div>
    </section>
)
