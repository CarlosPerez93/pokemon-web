import { Query } from './core'

const pokemonList = () => Query({ url: '/pokemon?offset=0&limit=20' })

const pokemon = (identifier: string) => {
    const pokemonName = identifier.replace(/^\/?pokemon\//, '').replace(/\/$/, '')
    return Query({ url: `/pokemon/${pokemonName}` })
}
const species = (name: string) => Query({ url: `/pokemon-species/${name}` })

export default { pokemonList, pokemon, species }
