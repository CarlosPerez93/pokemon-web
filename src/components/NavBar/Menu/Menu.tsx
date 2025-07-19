import { Link } from 'react-router-dom'

import { IconPokeBall } from '../../Icons'
import { ButtonApp } from '../../ButtonApp/ButtonApp'

import { ROUTES_PUBLIC as RP } from '../../../utils/constants/routes.constants'

import './Menu.css'

export const Menu = () => {
    return (
        <nav className='menu'>
            <div className='container-items'>
                <IconPokeBall />
            </div>
            <div className='container-auth-btn'>
                <ButtonApp>
                    <Link to={RP.home}>Home</Link>
                </ButtonApp>
                <ButtonApp>
                    <Link to={RP.listPokemon}>View all Pokémon</Link>
                </ButtonApp>
            </div>
        </nav>
    )
}

export default Menu
