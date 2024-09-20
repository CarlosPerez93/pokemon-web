import { IconLogo, IconMoon, IconSun } from '../Icons'

import './NavBar.css'

export const NavBar = () => {
    return (
        <nav>
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
    )
}

export default NavBar
