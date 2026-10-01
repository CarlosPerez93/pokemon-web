import { useCallback, useEffect, useRef, useState } from 'react'

import api from '../../api'
import { PokeList, ResponseFetch } from '@utils/api/pokemon-list.types'

const PAGE_SIZE = 40

export const usePokemonCatalog = () => {
    const [items, setItems] = useState<PokeList[]>([])
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const [loadingMore, setLoadingMore] = useState(false)
    const [error, setError] = useState(false)
    const offsetRef = useRef(0)

    const fetchPage = useCallback(async (offset: number, isInitial: boolean) => {
        if (isInitial) setLoading(true)
        else setLoadingMore(true)
        setError(false)
        try {
            const data = (await api.pokemon.pokemonList({
                offset,
                limit: PAGE_SIZE,
            })) as ResponseFetch
            setItems(current =>
                isInitial ? data.results : [...current, ...data.results],
            )
            setCount(data.count)
            offsetRef.current = offset + data.results.length
        } catch {
            setError(true)
        } finally {
            if (isInitial) setLoading(false)
            else setLoadingMore(false)
        }
    }, [])

    useEffect(() => {
        void fetchPage(0, true)
    }, [fetchPage])

    const loadMore = useCallback(() => {
        if (loading || loadingMore) return
        void fetchPage(offsetRef.current, false)
    }, [fetchPage, loading, loadingMore])

    const refetch = useCallback(() => fetchPage(0, true), [fetchPage])

    return {
        data: { count, results: items } as ResponseFetch,
        loading,
        loadingMore,
        error,
        hasMore: offsetRef.current < count,
        loadMore,
        refetch,
    }
}
