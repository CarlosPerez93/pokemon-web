import { query } from '../../api/core/api.types'
import { URL_API } from '../constants/environment.constant'

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
            _url.searchParams.append(key, params[key])
        )

    return _url
}

export const validateResponse = (status: string) => status

export type ResponseGeneric<T = unknown> = T

export type CardPoke = {
    id: number
    name: string
    sprites: string
}

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

export interface ResponsePoke<T = unknown> {
    abilities: T
    base_experience: number
    cries: T
    forms: T
    game_indices: T
    height: number
    held_items: T
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: T
    name: string
    order: number
    past_abilities: T
    past_types: T
    species: T
    sprites: { other: { dream_world: { front_default: string } } }
    stats: T
    types: T
    weight: number
    url: string
}
