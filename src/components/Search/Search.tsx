import { IconSearch } from '../Icons/Icons'

import './Search.css'

export const Search = () => {
    return (
        <>
            <h3 className='title'>Mas de 800 Pokemons, elige tu favorito</h3>
            <section className='search-container'>
                <input
                    type='text'
                    placeholder='Encuentra tu pokemon'
                    className='search-input'
                />
                <button className='search-btn'>
                    <IconSearch /> Buscar pokemon
                </button>
            </section>
        </>
    )
}
export default Search
