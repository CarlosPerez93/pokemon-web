import { useCallback, useState } from 'react'

export const usePokemonTypeIndex = () => {
    const [loadedTypes, setLoadedTypes] = useState<Record<string, string[]>>({})
    const onTypesLoaded = useCallback((name: string, types: string[]) => {
        setLoadedTypes(current => {
            const previous = current[name]
            if (
                previous?.length === types.length &&
                previous.every((type, index) => type === types[index])
            )
                return current
            return { ...current, [name]: types }
        })
    }, [])

    return { loadedTypes, onTypesLoaded }
}
