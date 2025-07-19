import { useSearchT } from './useSearch/useSearch.type'

type PokemonItem = { name: string; [key: string]: string }

export const useSearch = ({ data, stateFilter }: useSearchT) =>
    data?.results?.filter((item: PokemonItem) =>
        stateFilter.toString().toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(stateFilter)
    )
