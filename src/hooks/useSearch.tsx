import { useSearchT } from './useSearch/useSearch.type'

export const useSearch = ({ data, stateFilter }: useSearchT) =>
    data?.results?.filter((item: any) =>
        stateFilter.toString().toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(stateFilter)
    )
