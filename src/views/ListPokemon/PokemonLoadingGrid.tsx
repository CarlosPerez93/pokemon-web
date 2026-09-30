export const PokemonLoadingGrid = () => (
    <div className='pokemon-grid' aria-busy='true' aria-label='Loading Pokémon'>
        {Array.from({ length: 8 }, (_, index) => (
            <div className='pokemon-skeleton' key={index} />
        ))}
    </div>
)
