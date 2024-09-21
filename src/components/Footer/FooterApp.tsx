import { Link } from 'react-router-dom'
import { IconPokeBall, IconGitHub, IconLinkedIn } from '../Icons'

import './FooterApp.css'

export const FooterApp = () => {
    return (
        <footer className='footer-app'>
            <Link
                children={<IconGitHub />}
                className='links'
                to={'https://github.com/CarlosPerez93'}
            />
            GitHub
            <IconPokeBall />
            LinkInd
            <Link
                children={<IconLinkedIn />}
                className='links'
                to={'https://www.linkedin.com/in/carlos-perez93/'}
            ></Link>
        </footer>
    )
}

export default FooterApp
