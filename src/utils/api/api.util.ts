import { query } from '@api/core/api.types'
import { URL_API } from '@utils/constants/environment.constant'

export const getHeader = (token: string | null) => {
    const exists = token !== null && { Authorization: `Bearer ${token}` }
    return {
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'https://javascript.info',
            ...exists,
        },
    }
}

export const getUrl = ({ url, params }: query): URL => {
    const _url = new URL(`${URL_API}${url}`)
    if (params)
        Object.keys(params).forEach(key =>
            _url.searchParams.append(key, params[parseInt(key)]),
        )

    return _url
}

export const validateResponse = (status: string) => status

export type ResponseGeneric<T = unknown> = T

export type PokeList = {
    name?: string
    url: string
}

export interface ResponseFetch {
    count: number
    next: string
    previous: string
    results: PokeList[]
}

export interface PokemonTypeSlot {
    slot: number
    type: { name: string; url: string }
}

export interface PokemonStatSlot {
    base_stat: number
    effort: number
    stat: { name: string; url: string }
}

export interface PokemonAbilitySlot {
    ability: { name: string; url: string }
    is_hidden: boolean
    slot: number
}

export interface PokemonMoveSlot {
    move: { name: string; url: string }
}

export interface PokemonSpecies {
    flavor_text_entries: {
        flavor_text: string
        language: { name: string }
    }[]
    genera: {
        genus: string
        language: { name: string }
    }[]
    habitat: { name: string } | null
}

export interface ResponsePoke<T = unknown> {
    abilities: PokemonAbilitySlot[]
    base_experience: number
    cries: T
    forms: T
    game_indices: T
    height: number
    held_items: T
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: PokemonMoveSlot[]
    name: string
    order: number
    past_abilities: T
    past_types: T
    species: T
    sprites: {
        front_default?: string | null
        other?: {
            dream_world?: { front_default?: string | null }
            'official-artwork'?: { front_default?: string | null }
        }
    }
    stats: PokemonStatSlot[]
    types: PokemonTypeSlot[]
    weight: number
    url: string
}
