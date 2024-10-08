import { Carousel, Spin } from 'antd'

import NavBar from '../../components/NavBar'
import { IconLogo } from '../../components/Icons'
import Pokemon from '../../components/Pokemons/Pokemon'

import api from '../../api'
import { useGet } from '../../hooks/api'
import { ResponseFetch } from '../../utils/api/api.util'
import { PokemonsProps } from '../../components/Pokemons/pokemons.types'

import './Home.css'

export const Home = () => {
    const { data, loading } = useGet<ResponseFetch<PokemonsProps[]>>({
        functionFetch: api.pokemon.pokemonList,
    })

    return (
        <NavBar>
            <div className='home'>
                <IconLogo />
                <Spin
                    style={{ minHeight: '450px' }}
                    spinning={loading}
                    tip='loading..'
                >
                    <Carousel className='carousel' autoplay>
                        {data?.results?.map((poke, index) => (
                            <Pokemon key={index} {...poke} />
                        ))}
                    </Carousel>
                </Spin>
            </div>
        </NavBar>
    )
}

export default Home
