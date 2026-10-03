import { Link } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'

import type { SearchTriggerProps } from './SearchTrigger.type'

import './SearchTrigger.css'

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

export default SearchTrigger
