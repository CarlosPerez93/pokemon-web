import { Carousel, Spin } from 'antd'

import Menu from '../../components/NavBar/Menu'
import { IconLogo } from '../../components/Icons'
import PokePresentation from '../../components/PokePresentation'

import api from '../../api'
import { useGet } from '../../hooks/api'
import { ResponseFetch } from '../../utils/api/api.util'

import './Home.css'

export const Home = () => {
    const { data, loading } = useGet<ResponseFetch>({
        functionFetch: api.pokemon.pokemonList,
    })

    return (
        <div className='home'>
            <Menu />
            <IconLogo />
            <Spin style={{ minHeight: '450px' }} spinning={loading} tip='loading..'>
                <Carousel className='carousel' autoplay>
                    {data?.results?.map(({ name, url }) => (
                        <PokePresentation url={url} key={name} />
                    ))}
                </Carousel>
            </Spin>
        </div>
    )
}

export default Home
