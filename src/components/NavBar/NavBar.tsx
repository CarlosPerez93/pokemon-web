import { ComponentProps, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    MoonOutlined,
    SearchOutlined,
    SunOutlined,
    WifiOutlined,
} from '@ant-design/icons'

import { IconPokeBall } from '../Icons'
import { FooterApp } from '../Footer'

import { toggleTheme } from '../../services/Theme/theme.slice'

import './NavBar.css'

export const NavBar = ({ children }: ComponentProps<'div'>) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const currentTheme = useSelector(
        (state: { theme: { currentTheme: string } }) => state.theme.currentTheme,
    )
    const searchShortcut = /Mac|iPhone|iPad/.test(navigator.platform)
        ? '⌘ K'
        : 'Ctrl K'

    useEffect(() => {
        const handleSearchShortcut = (event: KeyboardEvent) => {
            const target = event.target
            const isEditing =
                target instanceof HTMLElement &&
                (target.isContentEditable ||
                    ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))
            const isCommandSearch =
                (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k'

            if (isEditing || (!isCommandSearch && event.key !== '/')) return

            event.preventDefault()
            if (location.pathname !== '/list-pokemon') navigate('/list-pokemon')
            window.setTimeout(() => {
                document
                    .querySelector<HTMLInputElement>('.catalog-search input')
                    ?.focus()
            }, 0)
        }

        window.addEventListener('keydown', handleSearchShortcut)
        return () => window.removeEventListener('keydown', handleSearchShortcut)
    }, [location.pathname, navigate])

    return (
        <div className='app-shell' data-theme={currentTheme}>
            <header className='app-header'>
                <div className='app-header__inner'>
                    <Link className='brand' to='/' aria-label='Poke+Web home'>
                        <span className='brand__mark'>
                            <IconPokeBall />
                        </span>
                        <span className='brand__copy'>
                            <strong>
                                POKE<span>+</span>WEB
                            </strong>
                            <small>V2.4-FIELD · CODEX</small>
                        </span>
                    </Link>

                    <nav className='primary-nav' aria-label='Primary navigation'>
                        <NavLink
                            to='/'
                            end
                            className={({ isActive }) =>
                                isActive
                                    ? 'primary-nav__link is-active'
                                    : 'primary-nav__link'
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to='/list-pokemon'
                            className={({ isActive }) =>
                                isActive
                                    ? 'primary-nav__link is-active'
                                    : 'primary-nav__link'
                            }
                        >
                            Pokédex
                        </NavLink>
                        <NavLink
                            to='/dossier'
                            className={({ isActive }) =>
                                isActive
                                    ? 'primary-nav__link is-active'
                                    : 'primary-nav__link'
                            }
                        >
                            Dossier
                        </NavLink>
                    </nav>

                    <div className='app-header__actions'>
                        <Link
                            className='quick-search'
                            to='/list-pokemon'
                            aria-label='Search Pokémon'
                            aria-keyshortcuts='Control+K Meta+K /'
                        >
                            <SearchOutlined />
                            <span className='quick-search__label'>
                                Search Pokémon
                            </span>
                            <kbd>{searchShortcut}</kbd>
                        </Link>
                        <span className='system-status'>
                            <WifiOutlined aria-hidden='true' /> SYSTEM ONLINE
                        </span>
                        <button
                            className='theme-toggle'
                            type='button'
                            role='switch'
                            aria-checked={currentTheme === 'dark'}
                            aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} theme`}
                            onClick={() => dispatch(toggleTheme())}
                        >
                            <SunOutlined aria-hidden='true' />
                            <span className='theme-toggle__track'>
                                <span className='theme-toggle__thumb' />
                            </span>
                            <MoonOutlined aria-hidden='true' />
                        </button>
                    </div>
                </div>
            </header>

            <div className='app-main'>{children}</div>
            <FooterApp />
        </div>
    )
}

export default NavBar
