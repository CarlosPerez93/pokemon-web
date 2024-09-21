import { Carousel, Spin } from 'antd'

import NavBar from '../../components/NavBar'
import { IconLogo } from '../../components/Icons'
import Pokemon from '../../components/Pokemons/Pokemon'
import { FooterApp } from '../../components/Footer/FooterApp'

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
        <div className='home'>
            <NavBar />
            <IconLogo />
            <Spin style={{ minHeight: '450px' }} spinning={loading} tip='loading..'>
                <Carousel autoplay>
                    {data?.results?.map((poke, index) => (
                        <Pokemon key={index} {...poke} />
                    ))}
                </Carousel>
            </Spin>
            <FooterApp />
        </div>
    )
}

export default Home
