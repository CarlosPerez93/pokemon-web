import { Query } from './core'
import { URL_API } from '../utils/constants/environment.constant'
import { PokemonListParams } from './pokemon.type'

const pokemonList = (params?: PokemonListParams) => {
    const { offset = 0, limit = 20 } = params ?? {}
    return Query({ url: `/pokemon?offset=${offset}&limit=${limit}` })
}
const typeList = () => Query({ url: '/type?limit=100' })

const pokemon = (identifier: string) => {
    const pokemonName = identifier.replace(/^\/?pokemon\//, '').replace(/\/$/, '')
    return Query({ url: `/pokemon/${pokemonName}` })
}

const species = (name: string) => Query({ url: `/pokemon-species/${name}` })

const evolutionChain = (url: string) => Query({ url: url.replace(URL_API, '') })

export default { pokemonList, typeList, pokemon, species, evolutionChain }
