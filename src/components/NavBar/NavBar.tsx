import { ComponentProps } from 'react'
import { useSelector } from 'react-redux'

import { Brand } from './Brand'
import FooterAppView from '@components/Footer'
import { HeaderActions } from './HeaderActions'
import { PrimaryNavigation } from './PrimaryNavigation'

import './NavBar.css'

type ThemeState = { theme: { currentTheme: string } }

export const NavBar = ({ children }: ComponentProps<'div'>) => {
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
            <FooterAppView />
        </div>
    )
}

export default NavBar
