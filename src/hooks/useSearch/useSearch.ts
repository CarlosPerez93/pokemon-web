import { useSearchT } from './useSearch.type'

type PokemonItem = { name?: string }

export const useSearch = ({ data, stateFilter }: useSearchT) =>
    data?.results?.filter((item: PokemonItem) =>
        stateFilter.toString().trim().toLowerCase() === ''
            ? item
            : (item.name ?? '')
                  .toLowerCase()
                  .includes(stateFilter.toString().trim().toLowerCase()),
    )
