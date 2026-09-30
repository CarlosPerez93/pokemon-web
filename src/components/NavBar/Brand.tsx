import { Link } from 'react-router-dom'

import { IconPokeBall } from '../Icons'

export const Brand = () => (
    <Link className='brand' to='/' aria-label='Poke+Web home'>
        <span className='brand__mark'><IconPokeBall /></span>
        <span className='brand__copy'>
            <strong>POKE<span>+</span>WEB</strong>
            <small>V2.4-FIELD · CODEX</small>
        </span>
    </Link>
)
