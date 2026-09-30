import { useEffect, useState } from 'react'

const FAVORITES_STORAGE_KEY = 'poke-web-favorites'

const readFavorites = (): string[] => {
    try {
        const savedFavorites = window.localStorage.getItem(FAVORITES_STORAGE_KEY)
        const parsedFavorites: unknown = savedFavorites
            ? JSON.parse(savedFavorites)
            : []

        return Array.isArray(parsedFavorites)
            ? parsedFavorites.filter(
                  (favorite): favorite is string => typeof favorite === 'string',
              )
            : []
    } catch {
        return []
    }
}

export const useFavorites = () => {
    const [favorites, setFavorites] = useState<string[]>(readFavorites)

    useEffect(() => {
        window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites))
    }, [favorites])

    const toggleFavorite = (name: string) => {
        setFavorites(currentFavorites =>
            currentFavorites.includes(name)
                ? currentFavorites.filter(favorite => favorite !== name)
                : [...currentFavorites, name],
        )
    }

    return { favorites, toggleFavorite }
}
