import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightOutlined, HeartOutlined } from '@ant-design/icons'

import { CatalogLoadMore } from '@components/Catalog/CatalogLoadMore'
import { PokemonResultsGrid } from '@components/Catalog/PokemonResultsGrid'

import { useFavorites } from '@hooks/useFavorites'
import { usePokemonTypeIndex } from '@hooks/usePokemonTypeIndex'

import './Favorites.css'

const PAGE_SIZE = 20

export const Favorites = () => {
    const { favorites, toggleFavorite } = useFavorites()
    const { onTypesLoaded } = usePokemonTypeIndex()
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
    const items = favorites.slice(0, visibleCount).map(name => ({
        name,
        url: `/pokemon/${name}`,
    }))
    const hasMore = favorites.length > items.length

    return (
        <main className='favorites-page page-container'>
            <header className='favorites-heading'>
                <div>
                    <span className='section-kicker'>PERSONAL COLLECTION</span>
                    <h1>Saved favorites</h1>
                    <p>{favorites.length} saved specimens</p>
                </div>
                <Link className='favorites-back-link' to='/list-pokemon'>
                    Browse Pokédex <ArrowRightOutlined />
                </Link>
            </header>

            {items.length ? (
                <PokemonResultsGrid
                    items={items}
                    favorites={favorites}
                    viewMode='grid'
                    onToggleFavorite={toggleFavorite}
                    onTypesLoaded={onTypesLoaded}
                />
            ) : (
                <section className='favorites-empty' aria-live='polite'>
                    <HeartOutlined aria-hidden='true' />
                    <h2>No saved favorites yet</h2>
                    <p>Save specimens from the Pokédex to see them here.</p>
                    <Link to='/list-pokemon'>Browse the Pokédex</Link>
                </section>
            )}

            {hasMore && (
                <CatalogLoadMore
                    hasMore={hasMore}
                    loadingMore={false}
                    onLoadMore={() => setVisibleCount(count => count + PAGE_SIZE)}
                />
            )}
        </main>
    )
}

export default Favorites
