import { Pokemon } from './Pokemon'

import api from '../../api'
import { useGet } from '../../hooks/api/useGet'
import { ResponseFetch } from '../../utils/api/api.util'

import './Pokemons.css'
import { PokemonsProps } from './pokemons.types'

export const Pokemons = () => {
    const { data } = useGet<ResponseFetch<PokemonsProps[]>>({
        functionFetch: api.pokemon.pokemonList,
    })

    return (
        <section className='pokemons-container'>
            {data?.results?.map((poke, index) => (
                <Pokemon key={index} {...poke} />
            ))}
        </section>
    )
}

export default Pokemons
