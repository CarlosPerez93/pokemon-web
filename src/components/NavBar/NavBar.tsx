import { ComponentProps } from 'react'

import { Menu } from './Menu'
import { FooterApp } from '../Footer'
import { IconLogo, IconMoon, IconSun } from '../Icons'

import './NavBar.css'

type PropsNavBar = ComponentProps<'div'>

export const NavBar = ({ children }: PropsNavBar) => {
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
            {children}
            <FooterApp />
        </div>
    )
}

export default NavBar
