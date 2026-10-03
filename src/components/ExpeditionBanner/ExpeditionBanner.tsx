import { Link } from 'react-router-dom'
import { ArrowRightOutlined, RadarChartOutlined } from '@ant-design/icons'

import './ExpeditionBanner.css'

export const ExpeditionBanner = () => (
    <section className='expedition-banner' aria-label='Field expedition guide'>
        <div className='expedition-banner__icon'>
            <RadarChartOutlined />
        </div>
        <div>
            <span className='section-kicker'>INTEGRATED ECOSYSTEM MODELER</span>
            <h2>Biological Field Expedition Guide 2025</h2>
            <p>
                Access high-resolution morphometrics, phylogenetic transitions, and
                elemental interaction records.
            </p>
        </div>
        <Link className='expedition-button' to='/dossier'>
            Open Charizard dossier
        </Link>
        <Link
            className='expedition-button expedition-button--primary'
            to='/list-pokemon'
        >
            Initialize habitat scan <ArrowRightOutlined />
        </Link>
    </section>
)

export default ExpeditionBanner
