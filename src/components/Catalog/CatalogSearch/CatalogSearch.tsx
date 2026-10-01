import { SearchOutlined } from '@ant-design/icons'
import { FormEvent } from 'react'
import { CatalogSearchProps } from './CatalogSearch.type'

import './CatalogSearch.css'

export const CatalogSearch = ({ value, inputRef, onChange }: CatalogSearchProps) => {
    const submit = (event: FormEvent) => {
        event.preventDefault()
        inputRef.current?.focus()
    }

    return (
        <form
            className='catalog-toolbar'
            aria-label='Search Pokémon'
            onSubmit={submit}
        >
            <label className='catalog-search'>
                <SearchOutlined aria-hidden='true' />
                <input
                    ref={inputRef}
                    type='search'
                    placeholder='Search species, type, or ability...'
                    value={value}
                    onChange={event => onChange(event.target.value)}
                    aria-label='Search Pokémon by name'
                />
                <kbd>/</kbd>
            </label>
            <button className='catalog-search-submit' type='submit'>
                Search Database
            </button>
        </form>
    )
}
