import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'

import { CatalogViewModeProps } from './CatalogViewMode.type'

import './CatalogViewMode.css'

export const CatalogViewMode = ({ mode, onSelect }: CatalogViewModeProps) => (
    <div className='view-mode' role='group' aria-label='Catalog layout'>
        <button
            className={mode === 'grid' ? 'is-active' : ''}
            type='button'
            aria-label='Grid view'
            aria-pressed={mode === 'grid'}
            onClick={() => onSelect('grid')}
        >
            <AppstoreOutlined />
        </button>
        <button
            className={mode === 'list' ? 'is-active' : ''}
            type='button'
            aria-label='List view'
            aria-pressed={mode === 'list'}
            onClick={() => onSelect('list')}
        >
            <BarsOutlined />
        </button>
    </div>
)

export default CatalogViewMode
