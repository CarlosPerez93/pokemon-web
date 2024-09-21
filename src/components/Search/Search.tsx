import { ButtonApp } from '../ButtonApp/ButtonApp'
import { IconSearch } from '../Icons/Icons'

import './Search.css'

export const Search = () => {
    return (
        <div className='search'>
            <h3 className='title'>Mas de 800 Pokemons</h3>
            <section className='search-container'>
                <input
                    type='text'
                    placeholder='Encuentra tu pokemon'
                    className='search-input'
                />
                <ButtonApp className='search-btn'>
                    <IconSearch /> Buscar pokemon
                </ButtonApp>
            </section>
        </div>
    )
}
export default Search
