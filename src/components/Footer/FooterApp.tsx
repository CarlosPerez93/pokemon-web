import { Link } from 'react-router-dom'
import { IconPokeBall } from '../Icons'

import './FooterApp.css'
import { Layout } from 'antd'
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

export const FooterApp = () => {
    return (
        <Layout.Footer className='footer-app'>
            <Link
                children={<GithubOutlined />}
                className='links'
                to={'https://github.com/CarlosPerez93'}
            />
            GitHub
            <IconPokeBall />
            LinkInd
            <Link
                children={<LinkedinOutlined />}
                className='links'
                to={'https://www.linkedin.com/in/carlos-perez93/'}
            ></Link>
        </Layout.Footer>
    )
}

export default FooterApp
