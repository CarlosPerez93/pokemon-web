import { ComponentProps } from 'react'
import { useSelector } from 'react-redux'

import { FooterApp } from '../../Footer'
import { Brand } from '../Brand'
import { HeaderActions } from '../HeaderActions'
import { PrimaryNavigation } from '../PrimaryNavigation'
import './NavBarView.css'

type ThemeState = { theme: { currentTheme: string } }

export const NavBarView = ({ children }: ComponentProps<'div'>) => {
    const theme = useSelector((state: ThemeState) => state.theme.currentTheme)
    return (
        <div className='app-shell' data-theme={theme}>
            <header className='app-header'>
                <div className='app-header__inner'>
                    <Brand />
                    <PrimaryNavigation />
                    <HeaderActions />
                </div>
            </header>
            <div className='app-main'>{children}</div>
            <FooterApp />
        </div>
    )
}

export default NavBarView
