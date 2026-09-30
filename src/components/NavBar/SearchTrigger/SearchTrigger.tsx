import { SearchOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import './SearchTrigger.css'

type SearchTriggerProps = {
    shortcut: string
}

export const SearchTrigger = ({ shortcut }: SearchTriggerProps) => (
    <Link
        className='quick-search'
        to='/list-pokemon'
        aria-label='Search Pokémon'
        aria-keyshortcuts='Control+K Meta+K /'
    >
        <SearchOutlined />
        <span className='quick-search__label'>Search Pokémon</span>
        <kbd>{shortcut}</kbd>
    </Link>
)
