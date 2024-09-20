import api from '../../../api'
import { useGet } from '../../../hooks/api/useGet'
import { ResponseFetch1 } from '../../../utils/api/api.util'
import { PokemonsProps, PokemonProps } from '../pokemons.types'

import './Pokemon.css'

export const Pokemon = ({ url }: PokemonsProps) => {
    const newUrl: string = url.slice(25, url.length)
    const { data } = useGet<ResponseFetch1<PokemonProps>>({
        functionFetch: () => api.pokemon.pokemon(newUrl),
    })
    const objPoke: PokemonProps = {
        id: data.id,
        name: data.name,
        img: data?.sprites?.other.dream_world.front_default,
    }
    return (
        <div className='poke-card'>
            <img src={objPoke.img} alt={objPoke.name} className='img-poke' />
            <p className='poke-title'>
                <span>#{objPoke.id}</span>
                <span>{objPoke.name}</span>
            </p>
        </div>
    )
}

export default Pokemon
