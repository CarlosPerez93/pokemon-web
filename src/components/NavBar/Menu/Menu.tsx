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
                <ButtonApp
                    className='btn'
                    style={{ backgroundColor: '#05070a', color: 'white' }}
                >
                    <Link
                        to={RP.home}
                        style={{ color: 'white', textDecoration: 'none' }}
                    >
                        Home
                    </Link>
                </ButtonApp>
                <ButtonApp style={{ backgroundColor: '#05070a', color: 'white' }}>
                    <Link
                        to={RP.pokemons}
                        style={{ color: 'white', textDecoration: 'none' }}
                    >
                        View all Pokémons
                    </Link>
                </ButtonApp>
            </div>
        </nav>
    )
}

export default Menu
