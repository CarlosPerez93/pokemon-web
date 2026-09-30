import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

type DossierRecordNavigationProps = {
    id: number
}

export const DossierRecordNavigation = ({ id }: DossierRecordNavigationProps) => (
    <nav className='dossier-record-nav' aria-label='Adjacent specimen records'>
        <span>RECORD TRAVEL</span>
        {id > 1 ? (
            <Link to={`/dossier/${id - 1}`}>
                <ArrowLeftOutlined /> #{String(id - 1).padStart(4, '0')}
            </Link>
        ) : (
            <span />
        )}
        <span className='dossier-record-nav__current'>
            #{String(id).padStart(4, '0')}
        </span>
        <Link to={`/dossier/${id + 1}`}>
            #{String(id + 1).padStart(4, '0')} <ArrowRightOutlined />
        </Link>
    </nav>
)
