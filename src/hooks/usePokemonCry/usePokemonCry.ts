import { useCallback, useEffect, useRef, useState } from 'react'

import { PokemonCryResult } from './usePokemonCry.type'
import { PokemonCries } from '@utils/api/pokemon-record.types'
import { errorNotification } from '@utils/notifications/notification'

export const usePokemonCry = (cries?: PokemonCries): PokemonCryResult => {
    const url = cries?.latest ?? cries?.legacy ?? undefined
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        setIsPlaying(false)
        return () => {
            const audio = audioRef.current
            if (!audio) return
            audio.onended = null
            audio.pause()
            audioRef.current = null
        }
    }, [url])

    const play = useCallback(async () => {
        if (!url) return
        try {
            if (!audioRef.current) audioRef.current = new Audio(url)
            const audio = audioRef.current
            audio.onended = () => setIsPlaying(false)
            audio.currentTime = 0
            setIsPlaying(true)
            await audio.play()
        } catch (error) {
            setIsPlaying(false)
            errorNotification(error)
        }
    }, [url])

    return { hasCry: Boolean(url), isPlaying, play }
}
