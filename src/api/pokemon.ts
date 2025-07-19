import { Query } from './core'

const pokemonList = () => Query({ url: '/pokemon?offset=0&limit=24' })

const pokemon = (urlPoke: string) => Query({ url: urlPoke })

export default { pokemonList, pokemon }
