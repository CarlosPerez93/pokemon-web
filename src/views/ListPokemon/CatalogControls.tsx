import { HeartFilled, HeartOutlined } from '@ant-design/icons'
import { CatalogViewMode } from './CatalogViewMode'

type CatalogControlsProps = {
    sortBy: 'number' | 'name'
    viewMode: 'grid' | 'list'
    favoritesOnly: boolean
    favoriteCount: number
    onSort: (value: 'number' | 'name') => void
    onView: (value: 'grid' | 'list') => void
    onFavorites: () => void
}

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
        <span className='catalog-region'>REGION: KANTO</span>
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
