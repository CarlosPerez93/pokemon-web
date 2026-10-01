import { useCallback, useEffect, useState } from 'react'

import api from '../api'
import { EvolutionChain, EvolutionChainLink } from '../utils/api/api.util'

export type EvolutionStage = {
    name: string
    id: number
    depth: number
}

const extractId = (url: string) => {
    const match = url.match(/\/(\d+)\/?$/)
    return match ? Number(match[1]) : 0
}

const flattenChain = (link: EvolutionChainLink, depth = 0): EvolutionStage[] => {
    const stage: EvolutionStage = {
        name: link.species.name,
        id: extractId(link.species.url),
        depth,
    }
    return [
        stage,
        ...link.evolves_to.flatMap(child => flattenChain(child, depth + 1)),
    ]
}

export const useEvolutionChain = (url?: string) => {
    const [stages, setStages] = useState<EvolutionStage[]>([])
    const [loading, setLoading] = useState(false)

    const fetchChain = useCallback(async () => {
        if (!url) {
            setStages([])
            return
        }
        setLoading(true)
        try {
            const data = (await api.pokemon.evolutionChain(url)) as EvolutionChain
            setStages(flattenChain(data.chain))
        } finally {
            setLoading(false)
        }
    }, [url])

    useEffect(() => {
        void fetchChain()
    }, [fetchChain])

    return { stages, loading }
}
