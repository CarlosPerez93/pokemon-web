import { ButtonApp } from '../../ButtonApp/ButtonApp'
import { IconPokeBall } from '../../Icons'

import './Menu.css'
export const Menu = () => {
    return (
        <nav className='menu'>
            <div className='container-items'>
                <IconPokeBall />
            </div>
            <div className='container-auth-btn'>
                <ButtonApp style={{ color: '#47536B' }}>Sign in</ButtonApp>
                <ButtonApp style={{ backgroundColor: '#05070a', color: 'white' }}>
                    Sign up
                </ButtonApp>
            </div>
        </nav>
    )
}

export default Menu
