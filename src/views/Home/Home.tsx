import { Carousel, Spin } from 'antd'

import Menu from '../../components/NavBar/Menu'
import { IconLogo } from '../../components/Icons'

import api from '../../api'
import { useGet } from '../../hooks/api'
import { ResponseFetch } from '../../utils/api/api.util'
import { PokemonsProps } from '../../components/PokePresentation/pokePresentation.types'

import './Home.css'
import PokePresentation from '../../components/PokePresentation'

export const Home = () => {
    const { data, loading } = useGet<ResponseFetch<PokemonsProps[]>>({
        functionFetch: api.pokemon.pokemonList,
    })

    return (
        <div className='home'>
            <Menu />
            <IconLogo />
            <Spin style={{ minHeight: '450px' }} spinning={loading} tip='loading..'>
                <Carousel className='carousel' autoplay>
                    {data?.results?.map((poke, index) => (
                        <PokePresentation key={index} {...poke} />
                    ))}
                </Carousel>
            </Spin>
        </div>
    )
}

export default Home
