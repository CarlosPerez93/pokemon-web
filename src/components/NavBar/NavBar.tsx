import { ComponentProps } from 'react'

import { FooterApp } from '../Footer'
import { IconLogo, IconMoon, IconSun } from '../Icons'

import './NavBar.css'

export const NavBar = ({ children }: ComponentProps<'div'>) => {
    return (
        <div className='nav-s'>
            <nav className='first-nav'>
                <IconLogo />
                <div className='switch'>
                    <IconSun />
                    <label>
                        <input type='checkbox' className='check-switch' hidden />
                        <span className='slider' />
                    </label>
                    <IconMoon />
                </div>
            </nav>

            {children}
            <FooterApp />
        </div>
    )
}

export default NavBar
