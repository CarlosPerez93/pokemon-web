import { IconLogo, IconMoon, IconSun } from '../Icons'
import Menu from './Menu'

import './NavBar.css'

export const NavBar = () => {
    return (
        <div className='nav-s'>
            <nav className='first-nav'>
                <IconLogo />

                <div className='switch'>
                    <IconSun />
                    <label>
                        <input type='checkbox' className='check-switch' hidden />
                        <span className='slider'></span>
                    </label>
                    <IconMoon />
                </div>
            </nav>
            <Menu />
        </div>
    )
}

export default NavBar
