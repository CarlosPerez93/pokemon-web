import { useState } from 'react'

import Search from '../../components/Search'

import Menu from '../../components/NavBar/Menu'
import PokeCard from '../../components/PokeCard'

import api from '../../api'
import { useGet } from '../../hooks/api/useGet'
import { useSearch } from '../../hooks/useSearch'
import { ResponseFetch } from '../../utils/api/api.util'

import './Pokemons.css'

export const Pokemons = () => {
    const { data } = useGet<ResponseFetch>({
        functionFetch: api.pokemon.pokemonList,
    })

    const [pokemon, setPokemon] = useState<string>('')

    const handleSearch = (e: any) => {
        setPokemon(e.target.value)
    }
    return (
        <div className='pokemons'>
            <Menu />

            <Search handleSearch={handleSearch} />
            <div className='list'>
                {useSearch({ data, stateFilter: pokemon })?.map((dat: any) => (
                    <PokeCard key={dat.name} {...dat} />
                ))}
            </div>
        </div>
    )
}

export default Pokemons
