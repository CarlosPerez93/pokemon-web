import { Carousel } from 'antd'

import { Pokemon } from './Pokemon'

import api from '../../api'
import { useGet } from '../../hooks/api/useGet'
import { PokemonsProps } from './pokemons.types'
import { ResponseFetch } from '../../utils/api/api.util'

import './Pokemons.css'

export const Pokemons = () => {
    const { data } = useGet<ResponseFetch<PokemonsProps[]>>({
        functionFetch: api.pokemon.pokemonList,
    })

    return (
        <div className='pokemons-container'>
            {data?.results?.map((poke, index) => (
                <Pokemon key={index} {...poke} />
            ))}
        </div>
    )
}

export default Pokemons
