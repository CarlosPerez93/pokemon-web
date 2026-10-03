import { Skeleton } from 'antd'

import './DossierLoadingState.css'

export const DossierLoadingState = () => (
    <main
        className='dossier-page dossier-loading page-container'
        aria-busy='true'
        aria-label='Loading specimen dossier'
    >
        <section className='dossier-hero'>
            <div className='dossier-hero-left'>
                <Skeleton active title={{ width: '50%' }} paragraph={{ rows: 4 }} />
                <Skeleton.Image active style={{ width: '100%', height: 220 }} />
            </div>
            <div className='dossier-hero-right'>
                <Skeleton active paragraph={{ rows: 3 }} />
                <Skeleton active paragraph={{ rows: 5 }} />
            </div>
        </section>
    </main>
)

export default DossierLoadingState
