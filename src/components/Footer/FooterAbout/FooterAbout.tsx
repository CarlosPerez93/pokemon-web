import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

import { IconPokeBall } from '../../Icons'

import './FooterAbout.css'

export const FooterAbout = () => (
    <section className='footer-app__about'>
        <div className='footer-app__brand'>
            <IconPokeBall />
            <strong>POKE + WEB CODEX</strong>
        </div>
        <p>
            An open-access natural sciences database and biological field guide.
            Curating ecological distribution, morphometrics, phylogenetic evolutions,
            and elemental capabilities.
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
)
