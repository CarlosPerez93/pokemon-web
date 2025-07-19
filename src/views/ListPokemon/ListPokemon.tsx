import { Input } from 'antd'
import { ChangeEvent, useState } from 'react'

import Menu from '../../components/NavBar/Menu'
import PokeCard from '../../components/Card/PokeCard'

import api from '../../api'
import { useGet } from '../../hooks/api/useGet'
import { useSearch } from '../../hooks/useSearch'
import { PokeList, ResponseFetch } from '../../utils/api/api.util'

import './ListPokemon.css'

const { Search } = Input

export const ListPokemon = () => {
    const { data } = useGet<ResponseFetch>({
        functionFetch: api.pokemon.pokemonList,
    })

    const [pokemon, setPokemon] = useState<string>('')

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setPokemon(e.target.value)
    }
    return (
        <div className='pokemon'>
            <Menu />

            <Search
                placeholder='search pokemon'
                className='search'
                onChange={handleSearch}
                size='large'
            />

            <div className='list'>
                {useSearch({ data, stateFilter: pokemon })?.map((dat: PokeList) => {
                    return <PokeCard key={dat.name} {...dat} />
                })}
            </div>
        </div>
    )
}

export default ListPokemon
