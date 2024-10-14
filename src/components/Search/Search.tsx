import './Search.css'

export const Search = ({ handleSearch }: any) => {
    return (
        <div className='search'>
            <h3 className='title'>Mas de 800 Pokemons</h3>
            <section className='search-container'>
                <input
                    onChange={handleSearch}
                    type='text'
                    placeholder='Encuentra tu pokemon'
                    className='search-input'
                />
            </section>
        </div>
    )
}
export default Search
