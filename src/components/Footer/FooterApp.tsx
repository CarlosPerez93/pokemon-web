import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import { IconPokeBall } from '../Icons'

import './FooterApp.css'

export const FooterApp = () => {
    return (
        <footer className='footer-app'>
            <div className='footer-app__columns'>
                <section className='footer-app__about'>
                    <div className='footer-app__brand'>
                        <IconPokeBall />
                        <strong>POKE + WEB CODEX</strong>
                    </div>
                    <p>
                        An open-access natural sciences database and biological field
                        guide. Curating ecological distribution, morphometrics,
                        phylogenetic evolutions, and elemental capabilities.
                    </p>
                    <div className='footer-app__social'>
                        <a
                            href='https://github.com/CarlosPerez93'
                            aria-label='GitHub'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <GithubOutlined />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/carlos-perez93/'
                            aria-label='LinkedIn'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <LinkedinOutlined />
                        </a>
                    </div>
                </section>
                <section className='footer-app__group'>
                    <h2>Taxonomy Reference</h2>
                    <Link to='/list-pokemon'>National Pokédex index</Link>
                    <Link to='/list-pokemon'>Regional eco-registers</Link>
                    <Link to='/list-pokemon'>Type matrix &amp; combat dynamics</Link>
                    <Link to='/list-pokemon'>Morphological classifications</Link>
                </section>
                <section className='footer-app__group footer-app__metadata'>
                    <h2>Archive Metadata</h2>
                    <span>
                        Terminal Build <strong>2.4.0-FIELD</strong>
                    </span>
                    <span>
                        Core Engine <strong>POKÉAPI LIVE</strong>
                    </span>
                    <span>
                        Favorite Cache <strong>LOCAL STORAGE</strong>
                    </span>
                </section>
            </div>
            <div className='footer-app__bottom'>
                <span>
                    © 2025 Poké + Web Research Institute. Pokémon names are
                    trademarks of their respective owners.
                </span>
                <span>
                    FIELD RESEARCH TERMINAL · NON-COMMERCIAL SCHOLARLY ARCHIVE
                </span>
            </div>
        </footer>
    )
}

export default FooterApp
