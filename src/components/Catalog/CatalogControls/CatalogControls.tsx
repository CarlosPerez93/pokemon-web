import { HeartFilled, HeartOutlined } from '@ant-design/icons'
import { CatalogViewMode } from '../CatalogViewMode'
import { CatalogControlsProps } from './CatalogControls.type'

import './CatalogControls.css'

export const CatalogControls = (props: CatalogControlsProps) => (
    <section className='catalog-control-row' aria-label='Catalog display options'>
        <label className='catalog-sort'>
            <span>Sort:</span>
            <select
                value={props.sortBy}
                onChange={event =>
                    props.onSort(event.target.value as 'number' | 'name')
                }
            >
                <option value='number'>National number</option>
                <option value='name'>Name A-Z</option>
            </select>
        </label>
        <span className='catalog-region'>REGION: NATIONAL</span>
        <span className='catalog-control-row__spacer' />
        <button
            className={`favorites-filter${props.favoritesOnly ? ' is-active' : ''}`}
            type='button'
            aria-pressed={props.favoritesOnly}
            onClick={props.onFavorites}
        >
            {props.favoritesOnly ? <HeartFilled /> : <HeartOutlined />}
            <span>Favorites</span>
            <strong>{props.favoriteCount}</strong>
        </button>
        <CatalogViewMode mode={props.viewMode} onSelect={props.onView} />
    </section>
)
