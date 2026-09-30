import { useDispatch, useSelector } from 'react-redux'
import { MoonOutlined, SunOutlined } from '@ant-design/icons'

import { toggleTheme } from '../../../services/Theme/theme.slice'

import './ThemeToggle.css'

type RootTheme = { theme: { currentTheme: string } }

export const ThemeToggle = () => {
    const dispatch = useDispatch()
    const theme = useSelector((state: RootTheme) => state.theme.currentTheme)
    return (
        <button
            className='theme-toggle'
            type='button'
            role='switch'
            aria-checked={theme === 'dark'}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            onClick={() => dispatch(toggleTheme())}
        >
            <SunOutlined aria-hidden='true' />
            <span className='theme-toggle__track'>
                <span className='theme-toggle__thumb' />
            </span>
            <MoonOutlined aria-hidden='true' />
        </button>
    )
}
