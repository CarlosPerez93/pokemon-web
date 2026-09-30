import { FooterAbout } from './FooterAbout'
import { FooterLegal } from './FooterLegal'
import { FooterMetadata } from './FooterMetadata'
import { FooterReferences } from './FooterReferences'
import './FooterApp.css'

export const FooterAppView = () => (
    <footer className='footer-app'>
        <div className='footer-app__columns'>
            <FooterAbout />
            <FooterReferences />
            <FooterMetadata />
        </div>
        <FooterLegal />
    </footer>
)

export default FooterAppView
