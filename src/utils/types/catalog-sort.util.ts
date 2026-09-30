import { PokeList } from '../api/pokemon-list.types'

export const sortPokemon = (items: PokeList[], sortBy: 'number' | 'name') =>
    [...items].sort((first, second) =>
        sortBy === 'name'
            ? (first.name ?? '').localeCompare(second.name ?? '')
            : dexNumber(first) - dexNumber(second),
    )

export const matchesPokemonType = (
    pokemon: PokeList,
    selected: string,
    loaded: Record<string, string[]>,
) =>
    selected === 'all' ||
    !loaded[pokemon.name ?? ''] ||
    loaded[pokemon.name ?? ''].includes(selected)

const dexNumber = (pokemon: PokeList) =>
    Number(pokemon.url.split('/').filter(Boolean).pop())
