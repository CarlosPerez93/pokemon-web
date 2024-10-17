import { Spin } from 'antd'
import api from '../../api'
import { useGet } from '../../hooks/api/useGet'
import { CardPoke, PokeList, ResponsePoke } from '../../utils/api/api.util'

import './PokePresentation.css'

export const PokePresentation = ({ url }: PokeList) => {
    const newUrl: string = url.slice(25, url.length)
    const { data, loading } = useGet<ResponsePoke>({
        functionFetch: () => api.pokemon.pokemon(newUrl),
    })

    const objPoke: CardPoke = {
        id: data?.id,
        name: data?.name,
        sprites: data?.sprites?.other?.dream_world?.front_default,
    }

    return (
        <Spin spinning={loading}>
            <div className='poke-presentation'>
                <img src={objPoke.sprites} alt={objPoke.name} className='img-poke' />
                <div className='mid-line' />
                <p className='poke-title'>{objPoke.name}</p>
            </div>
        </Spin>
    )
}

export default PokePresentation
