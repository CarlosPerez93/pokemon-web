import { NavLink } from 'react-router-dom'

import './PrimaryNavigation.css'

const activeClass = ({ isActive }: { isActive: boolean }) =>
    `primary-nav__link${isActive ? ' is-active' : ''}`

export const PrimaryNavigation = () => (
    <nav className='primary-nav' aria-label='Primary navigation'>
        <NavLink to='/' end className={activeClass}>
            Home
        </NavLink>
        <NavLink to='/list-pokemon' className={activeClass}>
            Pokédex
        </NavLink>
        <NavLink to='/dossier' className={activeClass}>
            Dossier
        </NavLink>
    </nav>
)

export default PrimaryNavigation
