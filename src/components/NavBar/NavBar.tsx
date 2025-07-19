import { Layout, Switch } from 'antd'
import { ComponentProps } from 'react'
import { useDispatch } from 'react-redux'
import { MoonOutlined, SunOutlined } from '@ant-design/icons'

import { IconLogo } from '../Icons'
import { FooterApp } from '../Footer'

import { toggleTheme } from '../../services/Theme/theme.slice'

import './NavBar.css'

export const NavBar = ({ children }: ComponentProps<'div'>) => {
    const dispatch = useDispatch()
    return (
        <Layout className='nav-s'>
            <nav className='first-nav'>
                <IconLogo />
                <div className='switch'>
                    <SunOutlined />
                    <Switch
                        onClick={() => dispatch(toggleTheme())}
                        checkedChildren='Dark'
                        unCheckedChildren='Light'
                        className='slider'
                    />
                    <MoonOutlined />
                </div>
            </nav>

            {children}
            <FooterApp />
        </Layout>
    )
}

export default NavBar
