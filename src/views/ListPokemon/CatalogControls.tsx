import {
    AppstoreOutlined,
    BarsOutlined,
    HeartFilled,
    HeartOutlined,
} from '@ant-design/icons'

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
        <ViewMode viewMode={props.viewMode} onView={props.onView} />
    </section>
)

const ViewMode = ({
    viewMode,
    onView,
}: Pick<CatalogControlsProps, 'viewMode' | 'onView'>) => (
    <div className='view-mode' role='group' aria-label='Catalog layout'>
        <button
            className={viewMode === 'grid' ? 'is-active' : ''}
            type='button'
            aria-label='Grid view'
            aria-pressed={viewMode === 'grid'}
            onClick={() => onView('grid')}
        >
            <AppstoreOutlined />
        </button>
        <button
            className={viewMode === 'list' ? 'is-active' : ''}
            type='button'
            aria-label='List view'
            aria-pressed={viewMode === 'list'}
            onClick={() => onView('list')}
        >
            <BarsOutlined />
        </button>
    </div>
)
